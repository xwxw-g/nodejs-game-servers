// Copyright 2020, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Delete a Game Server cluster
 * @param {string} projectId string project identifier
 * @param {string} location Compute Engine region
 * @param {string} realmId the realm to use
 * @param {string} gameClusterId the game cluster to delete
 */
function main(
  projectId = 'YOUR_PROJECT_ID',
  location = 'LOCATION_ID',
  realmId = 'REALM_ID',
  gameClusterId = 'GAME_CLUSTER_ID'
) {
  // [START cloud_game_servers_delete_cluster]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'Your Google Cloud Project ID';
  // const location = 'A Compute Engine region, e.g. "us-central1"';
  // const realmId = 'The ID of the realm to locate this cluster in';
  // const gameClusterId = 'The unique ID for this Game Server Cluster';
  const {
    GameServerClustersServiceClient,
  } = require('@google-cloud/game-servers');

  const client = new GameServerClustersServiceClient();

  async function deleteGameServerCluster() {
    const request = {
      // Provide full resource name of a Game Server Realm
      name: `projects/${projectId}/locations/${location}/realms/${realmId}/gameServerClusters/${gameClusterId}`,
    };

    await client.deleteGameServerCluster(request);

    console.log('Game Server cluster deleted');
    // [END cloud_game_servers_delete_cluster]
  }

  deleteGameServerCluster();
}

main(...process.argv.slice(2));
