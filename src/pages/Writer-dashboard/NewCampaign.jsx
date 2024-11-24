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
  const [selectedPlan, setSelectedPlan] = useState("");

  const [titleError, setTitleError] = useState("");
  const [adTypeError, setAdTypeError] = useState("");
  const [backgroundError, setBackgroundError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [dateError, setDateError] = useState("");
  const [planError, setPlanError] = useState("");

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

    if (!selectedPlan) {
      setPlanError("Please select a plan");
      hasError = true;
    }

    return !hasError;
  };
  const formattedDate = `${startDate.year}-${String(startDate.month).padStart(2, '0')}-${String(startDate.day).padStart(2, '0')}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      console.log("Submitting form with values:", {
        internalTitle,
        adType,
        backgroundImage,
        redirectLink,
        startDate,
        selectedPlan,
      });

      const response = await axios.post("/api/ads/create", {
        internalTitle,
        adType,
        backgroundImage,
        redirectLink,
        startDate: formattedDate,
        selectedPlan,
      });

      if (response.status === 200) {
        switch (response.data.code) {
          case "00":
            toast.success(response.data.message);
            navigate("/campaigns");
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
                selectedPlan: setPlanError,
              };

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
    navigate("/campaigns");
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setDateError("");
    console.log("Date changed to:", date);
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

          <div className="w-full max-w-xl flex flex-row gap-4">
            <DatePicker
              label="Start Date"
              variant="bordered"
              showMonthAndYearPickers
              value={startDate}
              onChange={handleDateChange}
              isInvalid={!!dateError}
              errorMessage={dateError}
              minDate={new Date()}
            />
          </div>

          <div>
            <Select
              label="Price"
              placeholder="Select a preferred plan"
              className="w-full max-w-xl"
              value={selectedPlan}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedPlan(value);
                setPlanError("");
                console.log("Selected Plan:", value);
              }}
              errorMessage={planError}
            >
              <SelectSection
                title="Aetha Content Discount"
                classNames={{ heading: headingClasses }}
              >
                <SelectItem key="1">Impressions: 280,500 Cost: $55</SelectItem>
                <SelectItem key="2">Impressions: 527,000 Cost: $100</SelectItem>
                <SelectItem key="3">3</SelectItem>
                <SelectItem key="4">4</SelectItem>
              </SelectSection>
              <SelectSection
                title="Other"
                classNames={{ heading: headingClasses }}
              >
                <SelectItem key="5">Impressions: 140,250 Cost: $55</SelectItem>
                <SelectItem key="6">Impressions: 263,500 Cost: $100</SelectItem>
                <SelectItem key="7">3</SelectItem>
                <SelectItem key="8">4</SelectItem>
              </SelectSection>
            </Select>
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
