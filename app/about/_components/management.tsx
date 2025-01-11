import ManagementTeam from "@/components/management-team";
import { getManagementDetails } from "../actions";

const Management = async () => {
  const managementData = await getManagementDetails();
  return (
    <section
      id="management-team"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <ManagementTeam data={managementData} />
    </section>
  );
};

export default Management;
