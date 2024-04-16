"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import api from "@/lib/apiCalls";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import translateApiMessage from "@/Functions/utils/translateApiMessage";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (success || error) return;
    if (!token) {
      setError("טוקן חסר");
      return;
    }
    try {
      await api.post("/auth/newVerification", { token });
      setSuccess("אומתת בהצלחה!");
    } catch (error: any) {
      const translateMessage = await translateApiMessage.newVerification(
        error.message
      );
      setError(translateMessage);
    }
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel="מאשר את הבקשה"
      backButtonLabel="חזרה להתחברות"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        {!success && <FormError message={error} />}
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};
