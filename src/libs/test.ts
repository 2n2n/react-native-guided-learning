// type ExpressionType = (num1: number, num2: number) => number;

export default function Test() {
  type Ticket = { id: number; status: "open" | "closed" };
  const original: Ticket = { id: 101, status: "open" };
  const updated: Ticket = { ...original, status: "closed" };
  async function loadCount(): Promise<number> {
    return 2;
  }
  async function loadDashboard(): Promise<void> {
    console.log("A. Loading");
    const [ticket, count] = await Promise.all([
      Promise.resolve(updated),
      loadCount(),
    ]);
    console.log(`C. ${ticket.status} (${count})`);
    console.log(`D. ${original.status}`);
  }

  loadDashboard().catch(console.error);
  console.log("B. Ready");
}
// export default function Test() {
//   function MyFn(param1: string, param2: number): void {
//     console.log("function only");
//   }

//   const MyArrowFn = (param1: string, param2: number): void => {
//     console.log("arrow function");
//   };

//   MyFn("a", 1);
//   MyArrowFn("a", 1);
// }

// export default function Test() {
//   type Ticket = {
//     id: number;
//     owner?: {
//       name: string;
//     };
//   };
//   const tickets: Ticket[] = [{ id: 101, owner: { name: "John" } }, { id: 102 }];
//   console.log(tickets[1].owner?.name);
// }

// const value: string | number | undefined | null = 0;
// console.log(value || 'Undefined')

// type Ticket = { id: number; status: "open" | "closed" | "pending" };
// const tickets: Ticket[] = [ // R#001
//   { id: 101, status: "open" }, // R#002
//   { id: 102, status: "pending" }, // #003
// ];
// const open = tickets.filter((ticket) => ticket.status === "open"); // R#004 [ R#002 { id: 101, status: "open" } ]
// open[0].status = "closed";

// console.log(tickets[0].status); // closed
// console.log(open.length); // 1
