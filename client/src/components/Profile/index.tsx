import ExportDataForm from "./ExportDataForm";
import NotificationForm from "./NotificationForm";
import PasswordForm from "./PasswordForm";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <NotificationForm />
        <PasswordForm />
        <ExportDataForm />
      </div>
    </div>
  );
};

export default Profile;
