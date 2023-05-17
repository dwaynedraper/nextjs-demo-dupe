import { CardP } from "@/services/types";
import React, { lazy, Suspense } from "react";

const CardUser = lazy(() => import("@/components/composite/CardUser"));
const CardUserDetails = lazy(() =>
  import("@/components/composite/CardUserDetails")
);

interface CardGridProps {
  type: "user" | "user details";
  users: CardP[];
}

type CardComponent = React.ElementType;

export default function CardGrid({ type, users }: CardGridProps): React.ReactElement | null {
  let CardComponent: CardComponent | null;
  switch (type) {
    case "user":
      CardComponent = CardUser;
      break;
    case "user details":
      CardComponent = CardUserDetails;
      break;
    default:
      throw new Error(`Invalid Card type: ${type}`);
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {users.map((user, index) => (
        <Suspense fallback={<div>Loading...</div>} key={index}>
          <CardComponent
            key={index}
            imageUrl={user.imageUrl ?? null}
            emotion={user.emotion ?? null}
            name={user.name ?? null}
            description={user.description ?? null}
            title={user.title ?? null}
            location={user.location ?? null}
            email={user.email ?? null}
          />
        </Suspense>
      ))}
    </div>
  );
}
