export interface Operator {
  id: number;
  firstName: string;
  lastName: string;
  opsCompleted: number;
  reliability: number;
  endorsements: string[];
}

export interface Op {
  opId: number;
  publicId: string;
  opTitle: string;
  operatorsNeeded: number;
  startTime: string;
  endTime: string;
  operators: Operator[];
}