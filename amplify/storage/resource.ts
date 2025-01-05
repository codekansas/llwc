import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "llwc-storage",
  access: (allow) => ({
    "profile/{entity_id}/*": [
      allow.guest.to(["read"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
