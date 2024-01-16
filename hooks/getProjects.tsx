import Left from "@/components/Left";
import Right from "@/components/Right";

export function getProjects({ stacked }: { stacked: boolean }) {
  const project1: JSX.Element = (
    <Right filename="./content/bbs_demo.mp4" isVideo stacked={stacked}>
      <div className="project_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Bleach Brave Souls Auto Farm</h1>
          <p>
            Bleach Brave Souls (BBS) Auto Farm is a program I created in order
            to automate the process of getting materials in the mobile game
            Bleach Brave Souls. The program is written in Python and uses the
            OpenCV library for image recognition. In order to make BBS Auto Farm
            accessible to everyone, I turned it into an executable file and
            created a setup wizard allowing easy installation. For user
            freindliness, I created a friendly user interface using PySimpleGUI.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://github.com/ZainMI/BBS-Auto-Farm" target="_blank">
              <img src="/content/git.png" width={"80px"} height={"80px"} />
            </a>
          </div>
        </div>
      </div>
    </Right>
  );

  const project2: JSX.Element = (
    <Left stacked={stacked} filename="./content/travel.mp4" isVideo>
      <div className="project_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Travel Planner</h1>
          <p>
            Travel Planner is a command line program I created in order to
            streamline the process of planning a trip. The program is written in
            C++ and uses data structures for optimization. The program allows
            users to create a list of destinations. Within those destinations,
            users can create a list of activities. Each activity has a time and
            cost associated with it. The program organizes the activities by
            their date and time as well as calculates the total cost of each
            destination based on the activities within it. At the end, it
            creates a webpage to visualize the trip as well as the total cost
            and length of the trip.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://github.com/ZainMI/travel-planner" target="_blank">
              <img src="/content/git.png" width={"80px"} height={"80px"} />
            </a>
          </div>
        </div>
      </div>
    </Left>
  );

  return [project1, project2];
}
