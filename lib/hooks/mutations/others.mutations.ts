import { useMutation } from "@tanstack/react-query";
import { publicApi } from "../../api/axios";
type ConsultationFormValues = {
  first_name: string;
  last_name: string;
  phone: string;
  date: string;
  slot: string;
  subject: string;
  description: string;
};

export const useSubmitConsulting = () => {
  return useMutation({
    mutationFn: async (body: ConsultationFormValues) => {
      const response = await publicApi.post("/api/v1/callback-requests/", body, {
        // headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
  });
};
