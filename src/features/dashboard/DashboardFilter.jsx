import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "30", label: "ماه" },
        { value: "7", label: "هفته" },
        { value: "3", label: "3 روز" },
      ]}
    />
  );
}

export default DashboardFilter;
