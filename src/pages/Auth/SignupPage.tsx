import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Input, Progress, Select, SelectItem } from "@nextui-org/react";
import booksmore from '../../../public/images/booksmore.jpg';
import { Github, Mail } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

interface FormData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
}

const SignupPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    role: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "username":
        if (value.length < 3) {
          newErrors.username = "Username must be at least 3 characters";
        } else {
          delete newErrors.username;
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (value.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const passwordStrength = calculatePasswordStrength(formData.password);



  return (
    <div 
    style={{
          backgroundImage: `url(${booksmore})`, // Dynamic image import
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
          backgroundPosition: "center", // Centers the image
          minHeight: "100vh", // Full screen height
          display: "flex", // Flexbox for centering content
        }}
    >
      <Card style={{
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    marginLeft:"13rem",
    marginTop:"2rem",
    marginBottom:"2rem",
    background: "linear-gradient(to bottom, #d8b4fe, #f5d0fe)",
  }}>
        <CardHeader>
          <h1 className="font-semibold ">Create an Account</h1>
          <p className="text-violet-800 text-sm">Join our community today</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {/* <div className"flex gap-4">
              <Button startContent={<Github className="w-5 h-5" />} className="w-full bg-black text-white">
                Sign up with GitHub
              </Button>
              <Button startContent={<Mail className="w-5 h-5" />} className="w-full bg-red-500 text-white">
                Sign up with Google
              </Button>

            </div> */}
             
            <div className="mt-4 flex flex-col gap-2">

              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={error => {
                  console.log(error);
                }}
              />
              
              <button className="bg-violet-400 dark:bg-gray-600 border-none rounded-lg w-full dark:text-white py-2 flex justify-center ju items-center text-sm hover:scale-105 duration-300">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2aa4f4"></stop>
                    <stop offset="1" stopColor="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
                Login with facebook
              </button>
            </div>

            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-violet-600" />
              <span className="text-violet-600 text-sm">OR</span>
              <div className="flex-1 h-px bg-violet-600" />
            </div>

            <Input
              label="Username"
              value={formData.username}
              variant="faded"
              color="primary"
              placeholder="Select your username"
              onChange={(e) => handleInputChange("username", e.target.value)}
              errorMessage={errors.username}
              isInvalid={!!errors.username}
            />

            <div className="flex gap-4">
              <Input
                label="First Name"
                variant="faded"
                value={formData.firstName}
                color="primary"
                placeholder="First name"
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <Input
                label="Last Name"
                variant="faded"
                value={formData.lastName}
                color="primary"
                placeholder="Last name"
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>

            <Input
              type="email"
              label="Email"
              variant="faded"
              color="primary"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              errorMessage={errors.email}
              isInvalid={!!errors.email}
            />

            <div className="space-y-2">
              <Input
                type="password"
                label="Password"
                variant="faded"
              color="primary"
              placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                errorMessage={errors.password}
                isInvalid={!!errors.password}
              />
              <Progress
                value={passwordStrength}
                className="h-2 bg-violet-600"
                color={
                  passwordStrength <= 25
                    ? "danger"
                    : passwordStrength <= 50
                    ? "warning"
                    : passwordStrength <= 75
                    ? "primary"
                    : "success"
                }
              />
            </div>

            <Select
              label="Gender"
              value={formData.gender}
              variant="faded"
              color="primary"
              placeholder="Select your gender"
              onChange={(e) => handleInputChange("gender", e.target.value)}
            >
              <SelectItem key="male" value="male">
                Male
              </SelectItem>
              <SelectItem key="female" value="female">
                Female
              </SelectItem>
              <SelectItem key="prefer-not-to-say" value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </Select>

            <Select
              label="Role"
              value={formData.role}
              variant="faded"
              color="primary"
              placeholder="Select your role"
              onChange={(e) => handleInputChange("role", e.target.value)}
            >
              <SelectItem key="reader" value="reader">
                Reader
              </SelectItem>
              <SelectItem key="writer" value="writer">
                Writer
              </SelectItem>
            </Select>

            <Button type="submit" color="primary">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignupPage;
