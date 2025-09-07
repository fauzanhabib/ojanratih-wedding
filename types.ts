
export interface RsvpMessage {
  id: number;
  name: string;
  message: string;
  attendance: 'present' | 'absent';
}
