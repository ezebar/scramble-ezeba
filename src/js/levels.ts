import Store from "./store";

const getLevelById = (levelId: number) =>
  Store.getLevels().find(({ id }: { id: number }) => id === levelId);

const Levels = {
  getLevelById,
};

export default Levels;

//TODO: duplicate this for users.
