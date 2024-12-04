import React, { useEffect } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

export const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();


  useEffect(() => {
    const handlePaymentSuccess = async () => {
        const sessionId = searchParams.get("sessionId");
        const adId = searchParams.get("adId");
        console.log("AD Id:", adId);
      
        if (sessionId && adId) {
          try {
            const response = await axios.put("/api/ads/success", null, {
              params: { sessionId, adId },
            });
      
            if (response.data?.code === "00") {
              toast.success("Payment confirmed successfully");
            } else {
              toast.error(response.data?.message || "Payment confirmation failed");
            }
          } catch (error) {
            console.error("Payment confirmation failed:", error.response || error.message);
            toast.error(
              error.response?.data?.message || "An unexpected error occurred."
            );
            alert(error.response?.data?.message || "An error occurred while confirming payment.");
          }
        } else {
          console.warn("Session ID or Ad ID is missing");
        }
      };
      

    handlePaymentSuccess();
  }, [searchParams]);

  return (
    <div className="h-screen max-w-screen-2xl flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Card className="w-full max-w-md p-6 bg-white" isBlurred shadow="lg">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-bold text-black">Payment Successful</h2>
        </CardHeader>
        <CardBody className="text-center">
          <div className="flex justify-center mb-6">
            <svg width="100" height="100">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="50%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'violet', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'fuchsia', stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>
              <CheckCircle2 size={100} fill="url(#grad1)" />
            </svg>
          </div>
          <p className="text-black mb-6">
            Your payment has been processed successfully.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="solid"
              color="default"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Back to Dashboard
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
