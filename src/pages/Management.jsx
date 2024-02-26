import AppLayout from "../ui/AppLayout";


import Owner from "../features/Management/Owner";
import Achievements from "../features/Management/Achievements";

function Management() {
  return (
    <AppLayout>
      <div className="pb-4 bg-backmng ">
        <Owner />
        <Achievements />
      </div>
    </AppLayout>
  );
}

export default Management;
