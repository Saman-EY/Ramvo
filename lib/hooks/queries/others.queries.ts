// import { useQuery } from "@tanstack/react-query";
// import { privateApi, publicApi } from "../../api/axios";
// import { IColor, ISize } from "@/app/(admin-panel)/lib/types";

// type TicketStatus = "pending" | "resolved";

// export const useGetTicketList = (status?: TicketStatus) => {
//   return useQuery({
//     queryKey: ["ticket-list", status],
//     queryFn: async () => {
//       const { data } = await privateApi.get("/supports", {
//         params: status ? { status } : {},
//       });

//       return data;
//     },
//   });
// };

// export const useGetColorsList = () => {
//   return useQuery<IColor[]>({
//     queryKey: ["color-list"],
//     queryFn: async () => {
//       const { data } = await publicApi.get("/color/get-all");
//       return data;
//     },
//   });
// };
// export const useGetSizeList = () => {
//   return useQuery<ISize[]>({
//     queryKey: ["size-list"],
//     queryFn: async () => {
//       const { data } = await publicApi.get("/size/get-all");
//       return data;
//     },
//   });
// };

