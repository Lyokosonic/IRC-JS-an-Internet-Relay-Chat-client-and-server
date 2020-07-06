import Server from "./server/Server";
import * as Constants from "./utils/Constants";

// Start the express server
Server.listen(Constants.SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at ${Constants.SERVER_HOST}:${Constants.SERVER_PORT}`);
});
