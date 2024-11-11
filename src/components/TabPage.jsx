// Generic component to render tab content
const TabPage = ({ section }) => {
  return (
    <div>
      <h2>{section} Section</h2>
      <p>You're viewing the tab for this section.</p>
    </div>
  );
};
export default TabPage;
