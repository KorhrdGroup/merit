import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "국가유공자 혜택자 학습 상담 신청 | 한평생그룹",
  description: "국가유공자 혜택자 학습 상담 신청",
};

export default function NationalMeritLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
