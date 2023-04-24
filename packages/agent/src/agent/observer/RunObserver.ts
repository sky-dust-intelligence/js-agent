import { StepResult } from "../../step";
import { Loop } from "../../step/Loop";
import { Step } from "../../step/Step";
import { Run } from "../Run";

export type RunObserver<RUN_STATE> = {
  onRunStarted?: (_: { run: Run<RUN_STATE> }) => void;
  onRunFinished?: (_: { run: Run<RUN_STATE>; result: StepResult }) => void;

  onStepGenerationStarted?: (_: { run: Run<RUN_STATE> }) => void;
  onStepGenerationFinished?: (_: {
    run: Run<RUN_STATE>;
    generatedText: string;
    step: Step<RUN_STATE>;
  }) => void;

  onLoopIterationStarted?: (_: {
    run: Run<RUN_STATE>;
    loop: Loop<RUN_STATE>;
  }) => void;
  onLoopIterationFinished?: (_: {
    run: Run<RUN_STATE>;
    loop: Loop<RUN_STATE>;
  }) => void;

  onStepExecutionStarted?: (_: {
    run: Run<RUN_STATE>;
    step: Step<RUN_STATE>;
  }) => void;
  onStepExecutionFinished?: (_: {
    run: Run<RUN_STATE>;
    step: Step<RUN_STATE>;
    result: StepResult;
  }) => void;
};
