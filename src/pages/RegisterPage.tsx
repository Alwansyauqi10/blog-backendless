import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      await axiosInstance.post("/users/register", {
        name,
        email,
        password,
      });

      alert("Register Success!");
    } catch (error) {
      console.log(error);
      alert("Register Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-100 mx-auto mt-20 space-y-4 border border-black p-8">
      <h1>Register Page</h1>

      <Label>Name</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleRegister} disabled={isLoading}>
        {isLoading ? "Loading" : "Submit"}
      </Button>
    </div>
  );
}

export default RegisterPage;
