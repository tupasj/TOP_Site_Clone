import { RecommendedChannels } from "./RecommendedChannels";

const Sidebar = () => {
  return (
    <aside>
      <div data-testid="sidebar-title" className="sidebar-title">
        Recommended Channels
      </div>
      <RecommendedChannels />
    </aside>
  );
};

export { Sidebar };
