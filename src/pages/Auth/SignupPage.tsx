import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Input, Progress, Select, SelectItem,} from '@nextui-org/react';
import {Github, Mail} from 'lucide-react';

interface FormData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    role: '',
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
    setFormData((prev) => ({...prev, [field]: value}));
    validateField(field, value);
  };

  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = {...errors};

    switch (field) {
      case 'username':
        if (value.length < 3) {
          newErrors.username = 'Username must be at least 3 characters';
        } else {
          delete newErrors.username;
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Invalid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (value.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
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
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pinky-purple to-pinky-blue bg-clip-text text-transparent">
              Create an Account
            </h1>
            <p className="text-gray-500 text-sm">Join our community today</p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button
                    startContent={<Github className="w-5 h-5"/>}
                    className="w-full bg-black text-white"
                >
                  Sign up with GitHub
                </Button>
                <Button
                    startContent={<Mail className="w-5 h-5"/>}
                    className="w-full bg-red-500 text-white"
                >
                  Sign up with Google
                </Button>
              </div>

              <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-gray-300"/>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-300"/>
              </div>

              <Input
                  label="Username"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  errorMessage={errors.username}
                  isInvalid={!!errors.username}
              />

              <div className="flex gap-4">
                <Input
                    label="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
                <Input
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>

              <Input
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  errorMessage={errors.email}
                  isInvalid={!!errors.email}
              />

              <div className="space-y-2">
                <Input
                    type="password"
                    label="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    errorMessage={errors.password}
                    isInvalid={!!errors.password}
                />
                <Progress
                    value={passwordStrength}
                    className="h-2"
                    color={
                      passwordStrength <= 25
                          ? 'danger'
                          : passwordStrength <= 50
                              ? 'warning'
                              : passwordStrength <= 75
                                  ? 'primary'
                                  : 'success'
                    }
                />
              </div>

              <Select
                  label="Gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
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
                  onChange={(e) => handleInputChange('role', e.target.value)}
              >
                <SelectItem key="reader" value="reader">
                  Reader
                </SelectItem>
                <SelectItem key="writer" value="writer">
                  Writer
                </SelectItem>
              </Select>

              <Button
                  type="submit"
                  className="bg-gradient-to-r from-pinky-purple to-pinky-blue text-white"
              >
                Sign Up
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
  );
};

export default SignupForm;