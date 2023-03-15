import { useParams } from "react-router-dom";

function UserNationSection() {
  const { pointNation } = useParams();
  return <p>{pointNation}</p>;
}

export default UserNationSection;
