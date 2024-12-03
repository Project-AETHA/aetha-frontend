import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { CheckCircle2, XCircle } from 'lucide-react';

export const PaymentFailurePage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Card 
          className="w-full max-w-md p-6"
          isBlurred
          shadow="lg"
        >
          <CardHeader className="flex justify-center">
            <h2 className="text-2xl font-bold text-white">Payment Failed</h2>
          </CardHeader>
          <CardBody className="text-center">
            <div className="flex justify-center mb-6">
              <XCircle size={100} className="text-white" />
            </div>
            <p className="text-white mb-6">
              We were unable to process your payment. 
              Please check your payment details and try again.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="solid" 
                color="default"
                className="bg-white text-violet-500"
              >
                Retry Payment
              </Button>
              <Button 
                variant="solid" 
                color="default"
                className="bg-white text-violet-500"
              >
                Contact Support
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default PaymentFailurePage;