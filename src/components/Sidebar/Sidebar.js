import { RecommendedChannels } from "./RecommendedChannels";

const Sidebar = () => {
  return (
    <aside>
      <div data-testid="sidebar-title" className="sidebar-title">
        RECOMMENDED CHANNELS
      </div>
      <RecommendedChannels />
    </aside>
  );
};

export { Sidebar };
