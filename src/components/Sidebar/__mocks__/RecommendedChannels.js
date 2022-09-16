/* eslint-disable jsx-a11y/img-redundant-alt */
import { mockResponses } from "../../../api/mockResponses/mockResponses";

const RecommendedChannels = () => {
  const mockChannelData = mockResponses.topUsersInfo;
  const channelIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div data-testid="recommended-channels" className="recommended-channels">
      {channelIndices.map((index) => {
        return (
          <div
            data-testid="recommended-channel"
            key={index}
            className="recommended-channel"
          >
            <div className="recommended-channel__section--plain">
              <img
                className="recommended-channel__img"
                src={mockChannelData.img}
                alt="user picture"
              ></img>
            </div>
            <div className="recommended-channel__section--vertical">
              <span data-testid="recommended-channel__name" className="recommended-channel__name">
                {mockChannelData.name}
              </span>
              <span data-testid="recommended-channel__game-name--center" className="recommended-channel__game-name--center">
                {mockChannelData.currentlyPlaying}
              </span>
            </div>
            <div className="recommended-channel__section">
              <i data-testid="recommended-channel__icon--circle fa-solid fa-circle" className="recommended-channel__icon--circle fa-solid fa-circle"></i>
              <span data-testid="recommended-channel__viewer-count" className="recommended-channel__viewer-count">{mockChannelData.viewerCount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { RecommendedChannels };
