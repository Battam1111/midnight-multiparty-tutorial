// Assumption: your project uses the generated driver for the Compact contract
// plus the contract-discovery helper referenced by Midnight examples.
// Verify the exact API name/signature against your installed SDK version and
// current Midnight docs before publishing the repository.

import { findDeployedContract } from "your-midnight-client-layer";
import contractInfo from "./artifacts/contract-info.json";

async function attachAsParticipant({
  deploymentRef,
  witnessContext,
}: {
  deploymentRef: string;
  witnessContext: unknown;
}) {
  const treasury = await findDeployedContract({
    deploymentRef,
    contractInfo,
    witnessContext,
  });

  await treasury.join();
  return treasury;
}
