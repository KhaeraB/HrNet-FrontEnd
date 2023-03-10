import TableEmployees from "../../components/Table/TableEmployees";
import { useGetEmployeesQuery } from "./employeesApiSlice";
import { ContainerTable } from "./index.styles";


/**
 * Description : Parent of Form to dispatch the data employees
 * @returns {any}
 */
const EmployeesList = () => {
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEmployeesQuery();

  let content;
  if (isLoading)
    content = (<p className="text-center p-5 fs-1"><b>Be patient, datas are coming...</b></p>
    );

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = employees;

    const tableContent = ids?.length ? <TableEmployees /> : null;

    content = <ContainerTable>{tableContent}</ContainerTable>;
  }

  return content;
};
export default EmployeesList;
