import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PLAYER_BY_SLUG } from "../../network/queries";
import { Player } from "../../types/Player";

const PlayerPage: NextPage = () => {
  const router = useRouter();
  const { slug: string } = router.query;
  const { data, loading, error } = useQuery(GET_PLAYER_BY_SLUG, {
    variables: { slug: string },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Error!</h2>;
  }

  const player: Player = data.player;

  return <h1>{player.displayName}</h1>;
};

export default PlayerPage;
