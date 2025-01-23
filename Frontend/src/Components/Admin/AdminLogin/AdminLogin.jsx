import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import { Label } from "../../../Components/ui/label";
import { Input } from "../../../Components/ui/input";
import { Button } from "../../../Components/ui/button";
import { useAuth } from "../../../Components/context/authContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminFormData, setAdminFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { adminLogin } = useAuth();

  const navigate = useNavigate();

  const { email, password } = adminFormData;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdminFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    await adminLogin({ email, password });
    let token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin");
    } else {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center  justify-center bg-black">
      <Card className="max-w-md w-full">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Admin Login</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter admin email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter admin password"
                />
              </div>
            </div>
            <Button type="submit" variant="outline" className="mt-4">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
