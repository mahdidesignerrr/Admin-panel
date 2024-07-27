import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "3", label: "3 روز" },
        { value: "7", label: "هفته" },
        { value: "30", label: "ماه" },
      ]}
    />
  );
}

export default DashboardFilter;
