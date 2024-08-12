import React from 'react';
import { Card, Button, Checkbox, Spacer, Link } from "@nextui-org/react";
import { Check, Star, BookOpen, Users, TrendingUp } from "lucide-react";

const UpgradeToWriter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Upgrade to Writer Account
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Unleash your creativity and share your stories with the world!
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Check className="h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-700">Publish your own stories, novels and poem & nisadas</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-700">Engage with a community of readers and writers</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-700">monetize your content</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-700">Access to writing tools and resources</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <Star className="h-12 w-12 text-yellow-400" />
                <h3 className="mt-3 text-lg font-medium text-gray-900">Enhanced Visibility</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Your works will be featured in our writer's showcase
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-blue-500" />
                <h3 className="mt-3 text-lg font-medium text-gray-900">Exclusive Workshops</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Access to writing workshops and masterclasses
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-12 w-12 text-purple-500" />
                <h3 className="mt-3 text-lg font-medium text-gray-900">Community building</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Connect with other like minded people and share experiences
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 text-green-500" />
                <h3 className="mt-3 text-lg font-medium text-gray-900">Analytics Dashboard</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Track your readership and earnings
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 bg-gray-50 sm:px-10">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Terms and Conditions</h3>
            <div className="text-sm text-gray-600 h-40 overflow-y-auto mb-4 p-4 bg-white rounded-md border border-gray-200">
              <p>1. By upgrading to a Writer Account, you agree to our content guidelines and community standards.</p>
              <p>2. You retain the rights to your original work while granting us a non-exclusive license to distribute it on our platform.</p>
              <p>3. Subscriptions and Donations paid derectly to your account, subject to minimum platform fee.</p>
              <p>4. We reserve the right to remove content that violates our guidelines or terms of service.</p>
              <p>5. Writer accounts are subject to periodic review to ensure compliance with our terms.</p>
              {/* Add more terms as needed */}
            </div>
            <Checkbox size="sm">
              I agree to the terms and conditions
            </Checkbox>
            <Spacer y={1} />
            <Link href='/author'>
              <Button color="primary" size="lg" className="w-full">
                Upgrade Now
              </Button>
            </Link>
            <p className="mt-4 text-xs text-gray-500 text-center">
              By clicking "Upgrade Now", you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpgradeToWriter;