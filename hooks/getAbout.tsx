import Left from "@/components/Left";
import Right from "@/components/Right";

export function getAbout({ stacked }: { stacked: boolean }) {
  const about1: JSX.Element = (
    <Right filename="./content/badminton.png" stacked={stacked}>
      <div className="about_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Badminton</h1>
          <p>
            I am on the Rensselaer Polytechnic Institute (RPI) badminton team. I
            am also the vice-president of the club. Since joining the team, we
            have participated in intercolegiate tournaments and have reached a
            high of 2nd place.
          </p>
        </div>
      </div>
    </Right>
  );

  const about2: JSX.Element = (
    <Left stacked={stacked} filename="./content/squash.png">
      <div className="about_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Squash</h1>
          <p>
            I started playing squash during my senior year of high school when I
            joined the varsity team. Despite RPI lacking a squash team, I've
            continued to pursue the sport by participating in many tournaments.
            To train I play at the local club at least 3 times a week.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://clublocker.com/users/449401/home" target="_blank">
              <img src="/content/club.png" width={"80px"} height={"80px"} />
            </a>
          </div>
        </div>
      </div>
    </Left>
  );

  const about3: JSX.Element = (
    <Right stacked={stacked} filename="./content/tennis.jpg">
      <div className="about_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Tennis</h1>
          <p>
            Tennis is the longest sport I've played. I started when I was 9
            years old although I only started taking it seriously when I was 12
            years. I have won many tournaments, was the captain of the varsity
            team, won the sectional championship, and qualified for the state
            tournament which was held in the National Tennis Center in New York.
            I am now part of the RPI club team and played first singles during
            collegiate club sectionals.
          </p>
        </div>
      </div>
    </Right>
  );
  const about4: JSX.Element = (
    <Left stacked={stacked} filename="./content/skiing.jpg">
      <div className="about_card">
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Skiing</h1>
          <p>
            Skiing is a hobby I took up in 3rd grade. It took me 2 years to
            become good enough to ski alongside my friends who had been skiing a
            much longer time. I can ski almost all difficulties and have skiied
            the Swiss Alps.
          </p>
        </div>
      </div>
    </Left>
  );

  return [about1, about2, about3, about4];
}
