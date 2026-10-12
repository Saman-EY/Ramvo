import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { format } from "date-fns-jalali";

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY_COOKIE;
// const TEMP_TOKEN_KEY = "tempT";

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

export function catHref(slug: string, sub?: string) {
  const params = new URLSearchParams({ category: slug });
  if (sub) params.set("sub", sub);
  return `/shop?${params.toString()}`;
}

export const handleErrorToastOnMutation = (errors: any) => {
  if (errors && typeof errors === "object") {
    // Object.values(errors).forEach((messages: any) => {
    //   if (Array.isArray(messages)) {
    //     messages.forEach((msg: string) => toast.error(msg));
    //   } else {
    //     toast.error(messages);
    //   }
    // });
    if (Array.isArray(errors?.message)) {
      errors?.message.forEach((msg: any) => {
        toast.error(msg);
      });
    } else {
      toast.error(errors?.message);
    }
  } else {
    toast.error("خطایی رخ داده است");
  }
};

// export const setAuthToken = (token: string, expiresInDays = 7) => {
//   Cookies.set(TOKEN_KEY, token, {
//     expires: expiresInDays,
//     sameSite: "Strict",
//   });
// };
// export const setAuthTokenTemplory = (token: string, expiresInDays = 7) => {
//   Cookies.set(TEMP_TOKEN_KEY, token, {
//     expires: expiresInDays,
//     sameSite: "Strict",
//   });
// };

// export const getAuthToken = () => {
//   return Cookies.get(TOKEN_KEY);
// };
// export const getTempToken = () => {
//   return Cookies.get(TEMP_TOKEN_KEY);
// };

// export const removeAuthToken = () => {
//   Cookies.remove(TOKEN_KEY);
// };
// export const removeTempToken = () => {
//   Cookies.remove(TEMP_TOKEN_KEY);
// };

// export const Logout = () => {
//   removeAuthToken();
//   // removeTempToken();
//   toast.success("شما با موفقیت خارج شدید");
//   window.location.href = "/";
// };

// time ago from now
export const timeAgo = (dateString: string, locale: string = "fa-IR"): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const labels: Record<string, Record<string, string>> = {
    "fa-IR": {
      justNow: "همین الان",
      minutesAgo: "دقیقه پیش",
      hoursAgo: "ساعت پیش",
      daysAgo: "روز پیش",
      monthsAgo: "ماه پیش",
      yearsAgo: "سال پیش",
    },
    "en-US": {
      justNow: "just now",
      minutesAgo: "minutes ago",
      hoursAgo: "hours ago",
      daysAgo: "days ago",
      monthsAgo: "months ago",
      yearsAgo: "years ago",
    },
  };

  const t = labels[locale] ?? labels["en-US"];

  if (diffSeconds < 60) return t.justNow;
  if (diffMinutes < 60) return `${diffMinutes} ${t.minutesAgo}`;
  if (diffHours < 24) return `${diffHours} ${t.hoursAgo}`;
  if (diffDays < 30) return `${diffDays} ${t.daysAgo}`;
  if (diffMonths < 12) return `${diffMonths} ${t.monthsAgo}`;
  return `${diffYears} ${t.yearsAgo}`;
};

// translate request status
export function translateOrderStatus(status: string): string {
  switch (status) {
    case "pending":
      return "در انتظار";
    case "delivered":
      return "تحویل داده شده";
    case "canceled":
      return "لغو شده";
    default:
      return status;
  }
}

export const translatePaymentStatus = (status: string) => {
  switch (status) {
    case "pending":
      return "در انتظار";
    case "success":
      return "موفق";
    case "failed":
      return "ناموفق";

    default:
      return status;
  }
};

// convert iso to persian date
export const toJalali = (dateString: string) => {
  return format(new Date(dateString), "yyyy/MM/dd");
};
export const toJalaliWithTime = (dateString: string) => {
  const date = new Date(dateString);
  return `${format(date, "yyyy/MM/dd")} - ${format(date, "HH:mm")}`;
};

// ///////////////////////////////////

/** Formats a toman amount with thousands separators and Persian digits. */
export function formatToman(amount: number): string {
  const grouped = amount?.toLocaleString("en-US");
  return `${grouped} تومان`;
}
