import { connectToDatabase } from "@/lib/db";
import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import logo from "./cover.png";
interface Company {
  name: string;
  description: string;
  industry: string;
  website: string;
  logoUrl: string;
}

interface Props {
  params: {
    id: string;
  };
}

// Fetch company data (Server Action)
const getCompanyData = async (companyId: string): Promise<Company | null> => {
  const { db } = await connectToDatabase();
  const company = await db.collection("companies").findOne({ id: companyId });

  if (!company) return null;

  return {
    name: company.name,
    description: company.description,
    industry: company.industry,
    website: company.website,
    logoUrl: company.logoUrl,
  };
};

// Generate metadata dynamically
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const company = await getCompanyData(params.id);
  //   console.log(company);

  if (!company) {
    return {
      title: "Company Not Found",
    };
  }

  return {
    title: company.name,
    description: company.description,
  };
};

// Dynamic Page Component
const page = async ({ params }: Props) => {
  const company = await getCompanyData(params.id);
  console.log(params.id);

  if (!company) return notFound();

  return (
    <div className="min-h-screen center bg-slate-950 px-6">
      <div className=" w-3/4 mx-auto bg-white  rounded-lg overflow-hidden">
        {company.logoUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={
              "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/461179291_122107413410529920_2548987363290883755_n.png?stp=dst-png_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=RwkGzm2xoKsQ7kNvgHf1LnF&_nc_oc=AdiDtTiQRE32G5SlHHMYMAcpz3gujebwdaJezPr9QFkYHblkhgsnnbXbaKvt1nCByv8&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=AfQX6eRGWwdI4QpsvSLnXEU&oh=00_AYBgHL-wwdrGWnalU6USOIoGNab1J_Csc9Xg2J_KyF5v6g&oe=6768C829"
            }
            alt={`${company.name} Logo`}
            className="w-full  object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
          <p className="text-gray-600 mt-2">{company.description}</p>
          <p className="text-gray-500 mt-2">Industry: {company.industry}</p>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Visit Website
          </a>
          <div className="mt-4">
            <Link
              href="/portfolio"
              className="text-gray-700 hover:underline text-sm"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
