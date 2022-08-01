class MyQueue {
  queue: number[] = [];
  constructor() {}

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    return this.queue.shift()!;
  }

  peek(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
