import React, { useState } from "react";
import {
  Button,
  Input,
  Spacer,
  Card,
  Divider,
  DatePicker,
  Image,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ImageOnlineUpload from "@/components/common/ImageOnlineUpload.jsx";
import { CalendarDate } from "@internationalized/date";

const NewCampaign = () => {
  const navigate = useNavigate();
  const headingClasses =
    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";

  const tempFileName = Math.random().toString(36).substring(2, 15);
  const today = new Date();
  const initialCalendarDate = new CalendarDate(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  const [internalTitle, setInternalTitle] = useState("");
  const [adType, setAdType] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [redirectLink, setRedirectLink] = useState("");
  const [startDate, setStartDate] = useState(initialCalendarDate);
  const [endDate, setEndDate] = useState(initialCalendarDate);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const [titleError, setTitleError] = useState("");
  const [adTypeError, setAdTypeError] = useState("");
  const [backgroundError, setBackgroundError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [dateError, setDateError] = useState("");
  const [priceError, setPriceError] = useState("");

  const calculatePrice = (adType, startDate, endDate) => {
    if (!adType || !startDate || !endDate) return 0;

    const costPerDay = adType === "Leaderboard" ? 500 : 300;
    const duration =
      (new Date(endDate.year, endDate.month - 1, endDate.day) -
        new Date(startDate.year, startDate.month - 1, startDate.day)) /
      (1000 * 60 * 60 * 24);

    if (duration < 1) return 0;

    let price = duration * costPerDay;

    // Apply discounts
    if (duration > 7 && duration <= 14) {
      price *= 0.9; // 10% discount
    } else if (duration > 14) {
      price *= 0.8; // 20% discount
    }

    // Convert to cents (long format)
    return Math.round(price * 100);
  };

  const validateForm = () => {
    let hasError = false;

    if (!internalTitle) {
      setTitleError("Internal title is required");
      hasError = true;
    }

    if (!adType) {
      setAdTypeError("Please select an ad type");
      hasError = true;
    }

    if (!backgroundImage) {
      setBackgroundError("Background image is required");
      hasError = true;
    }

    if (!redirectLink) {
      setLinkError("Redirect link is required");
      hasError = true;
    }

    if (!startDate) {
      setDateError("Start date is required");
      hasError = true;
    }

    if (!endDate) {
      setDateError("End date is required");
      hasError = true;
    }

    if (!calculatedPrice || calculatedPrice <= 0) {
      setPriceError("Price is required and must be valid");
      hasError = true;
    }

    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const formattedStartDate = `${startDate.year}-${String(
        startDate.month
      ).padStart(2, "0")}-${String(startDate.day).padStart(2, "0")}`;

      const formattedEndDate = `${endDate.year}-${String(
        endDate.month
      ).padStart(2, "0")}-${String(endDate.day).padStart(2, "0")}`;

      console.log("Submitting form with values:", {
        internalTitle,
        adType,
        backgroundImage,
        redirectLink,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        calculatePrice: calculatedPrice,
      });

      const response = await axios.post("/api/ads/create", {
        internalTitle,
        adType,
        backgroundImage,
        redirectLink,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        calculatedPrice: calculatedPrice,
      });

      if (response.status === 200) {
        switch (response.data.code) {
          case "00":
            toast.success(response.data.message);
            const adId = response.data.content.id; // Assuming the response includes the new ad's ID

            // Initiate Stripe payment
            const paymentResponse = await axios.post("/api/payment/checkout", {
              name: internalTitle,
              amount: calculatedPrice, // in cents
              quantity: 1,
              currency: "LKR",
              adId: adId,
            });

            if (paymentResponse.status === 200) {
              // Redirect to Stripe checkout
              window.location.href = paymentResponse.data.sessionUrl;
            }
            break;
          case "05":
            toast.error(response.data.message);
            break;
          case "06":
            toast.warning(response.data.message);
            break;
          case "07":
            if (response.data.errors) {
              const errorSetters = {
                internalTitle: setTitleError,
                adType: setAdTypeError,
                backgroundImage: setBackgroundError,
                redirectLink: setLinkError,
                startDate: setDateError,
                endDate: setDateError,
                calculatedPrice: setPriceError,
              };

              // Show a more detailed toast
              toast.error(
                `Please correct the following errors:\n${response.data.errors}`
              );

              Object.entries(response.data.errors).forEach(([key, value]) => {
                if (errorSetters[key]) {
                  errorSetters[key](value);
                }
              });
            }
            toast.error("Please correct the errors in the form");
            break;
          default:
            toast.error("An unexpected error occurred");
            break;
        }
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error("Failed to create campaign. Please try again later.");
    }
  };

  const handleCancel = () => {
    navigate("/author/advertising");
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setDateError("");
    setCalculatedPrice(calculatePrice(adType, date, endDate));
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setDateError("");
    setCalculatedPrice(calculatePrice(adType, startDate, date));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-2">
      <Card className="w-full p-6 shadow-md" radius="sm">
        <h2 className="text-2xl font-bold mb-4">New Campaign</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              fullWidth
              placeholder="Internal Title"
              value={internalTitle}
              onChange={(e) => {
                const value = e.target.value;
                setInternalTitle(value);
                setTitleError("");
                console.log("Internal Title changed to:", value);
              }}
              isInvalid={!!titleError}
              errorMessage={titleError}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <RadioGroup
                label="Select your preferred place"
                orientation="horizontal"
                size="sm"
                value={adType}
                onChange={(event) => {
                  const value = event.target.value;
                  setAdType(value);
                  setAdTypeError("");
                  console.log("Ad Type selected:", value);
                }}
                errorMessage={adTypeError}
                isRequired={true}
                isInvalid={!!adTypeError}
              >
                <Radio value="Leaderboard">
                  <span>Leaderboard (728 x 90)</span>
                  <Image
                    width={300}
                    alt="Leaderboard Example"
                    src="/images/ads/LatestUpdatesLeaderboard.png"
                  />
                </Radio>
                <Radio value="Rectangle">
                  <span>Rectangle (300 x 250)</span>
                  <Image
                    width={300}
                    alt="Rectangle Example"
                    src="/images/ads/LatestUpdatesRectangle.png"
                  />
                </Radio>
              </RadioGroup>
            </div>
          </div>

          <div className="mb-4 flex flex-col">
            <ImageOnlineUpload
              setimage={setBackgroundImage}
              fileName={tempFileName}
            />
            {!backgroundImage && backgroundError && (
              <span className="text-red-500 text-sm">{backgroundError}</span>
            )}
          </div>

          <Input
            type="link"
            label="Link"
            value={redirectLink}
            onChange={(e) => {
              const value = e.target.value;
              setRedirectLink(value);
              setLinkError("");
              console.log("Redirect Link entered:", value);
            }}
            className="max-w-xl"
            isInvalid={!!linkError}
            errorMessage={linkError}
          />

          <div className="flex gap-4">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
              minDate={today}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={handleEndDateChange}
              minDate={startDate}
            />
          </div>
          {dateError && (
            <span className="text-red-500 text-sm">{dateError}</span>
          )}
          <div>
            <span className="text-lg font-semibold">
              Price: LKR {(calculatedPrice / 100).toFixed(2)}
            </span>
            {priceError && (
              <span className="text-red-500 text-sm block">{priceError}</span>
            )}
          </div>

          <div className="flex justify-between mr-8">
            <Button shodow color="primary" type="submit">
              Create
            </Button>
            <Button shadow color="danger" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewCampaign;
