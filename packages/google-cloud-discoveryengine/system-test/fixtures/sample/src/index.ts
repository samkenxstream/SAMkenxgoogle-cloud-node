// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {
  CompletionServiceClient,
  DocumentServiceClient,
  RecommendationServiceClient,
  SchemaServiceClient,
  SearchServiceClient,
  UserEventServiceClient,
} from '@google-cloud/discoveryengine';

// check that the client class type name can be used
function doStuffWithCompletionServiceClient(client: CompletionServiceClient) {
  client.close();
}
function doStuffWithDocumentServiceClient(client: DocumentServiceClient) {
  client.close();
}
function doStuffWithRecommendationServiceClient(
  client: RecommendationServiceClient
) {
  client.close();
}
function doStuffWithSchemaServiceClient(client: SchemaServiceClient) {
  client.close();
}
function doStuffWithSearchServiceClient(client: SearchServiceClient) {
  client.close();
}
function doStuffWithUserEventServiceClient(client: UserEventServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const completionServiceClient = new CompletionServiceClient();
  doStuffWithCompletionServiceClient(completionServiceClient);
  // check that the client instance can be created
  const documentServiceClient = new DocumentServiceClient();
  doStuffWithDocumentServiceClient(documentServiceClient);
  // check that the client instance can be created
  const recommendationServiceClient = new RecommendationServiceClient();
  doStuffWithRecommendationServiceClient(recommendationServiceClient);
  // check that the client instance can be created
  const schemaServiceClient = new SchemaServiceClient();
  doStuffWithSchemaServiceClient(schemaServiceClient);
  // check that the client instance can be created
  const searchServiceClient = new SearchServiceClient();
  doStuffWithSearchServiceClient(searchServiceClient);
  // check that the client instance can be created
  const userEventServiceClient = new UserEventServiceClient();
  doStuffWithUserEventServiceClient(userEventServiceClient);
}

main();
