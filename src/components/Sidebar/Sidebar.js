import twitchAPI from "../../api/twitchAPI";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    const consoleLogData = async () => {
      const users = await twitchAPI.fetchUsers();
      console.log(users);
    };
    consoleLogData();
  }, []);

  return (
    <aside>
      <div className="sidebar-title">Recommended Channels</div>
      <div className="recommended-channels">
        <div className="recommended-channel">Recommended channel</div>
      </div>
    </aside>
  );
};

export { Sidebar };
