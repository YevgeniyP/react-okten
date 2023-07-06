import launchItem from "./LaunchItem.module.css";

function LaunchItem(props) {
  const { launch } = props;
  return (
    <div className={launchItem.wrapper}>
      <h2>Name: {launch.mission_name}</h2>
      <p>Year: {launch.launch_year}</p>
      <img alt={launch.mission_name} src={launch.links.mission_patch_small} />
    </div>
  );
}

export default LaunchItem;
