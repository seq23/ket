// Episodes 1–5 introduce the leads, their goals and stakes, with tension rising each time.
// End episode 6 on the strongest reveal or betrayal so far. Ads begin at episode 7.
// Every episode ends on a cliffhanger. The three endings resolve the same finale in distinct ways.

export const EPISODES_PER_SERIES = 20;
export const FREE_EPISODES = 6;
export const MAX_EPISODES = 25;
export const ENDINGS_PER_SERIES = 3;
export const EPISODE_SECONDS = 60;
export const PLACEHOLDER_LABEL = 'Placeholder — episode not filmed yet';
export const LOCALES = ['en', 'pt', 'fr', 'es', 'zh'] as const;
export const LANES = ['Romance', 'Royalty', 'Triumph', 'Black Joy', 'Black Wealth', 'Faith'] as const;

type Locale = (typeof LOCALES)[number];
type Lane = (typeof LANES)[number];
type StoryBeat = readonly [title: string, setup: string, turn: string];

type SeriesDraft = {
  id: string;
  title: string;
  pairing: string;
  lane: Lane;
  language: Locale;
  hook: string;
  inspired_by?: string;
  episodes: readonly StoryBeat[];
  endings: readonly StoryBeat[];
};

const drafts: readonly SeriesDraft[] = [
  {
    id: 'lagos-to-houston',
    title: 'Lagos to Houston',
    pairing: 'African American + African',
    lane: 'Romance',
    language: 'en',
    hook: 'A Lagos nurse marries into a Houston family that has already planned a future without her.',
    episodes: [
      ['The Welcome', 'Nigerian nurse Bísí arrives in Houston for her wedding to Devin and finds the place cards printed without her family name.', 'At the rehearsal, she hears his aunt introduce someone else as his fiancée.'],
      ['The Old Promise', 'Devin explains that the guest is his childhood friend, who is helping him revive a neighborhood clinic.', 'The clinic board packet lists the friend and Devin as co-owners of his new home.'],
      ['House Keys', 'Bísí decides to keep her own lease and applies for a nursing post at the clinic.', 'Her interview is canceled by a signer with Devin’s last name and her exact initials.'],
      ['The Patient List', 'At a volunteer shift Bísí recognizes names from the neighborhood and realizes the proposed hours would shut those patients out.', 'The board chair offers to restore her interview if she keeps the patient survey to herself.'],
      ['The Breakfast Table', 'Devin brings both families together for breakfast, where Bísí asks him to stand beside her at the board meeting.', 'His aunt calls the venue and cancels the wedding while they sit at the table.'],
      ['The Signature', 'Bísí and Devin marry at the courthouse, then arrive at the clinic meeting holding hands.', 'The board displays a signed letter from Bísí asking them to replace the clinic with a private practice, and Devin admits he knew the letter existed.'],
      ['Carbon Copy', 'Bísí brings the dated original of her survey to the board secretary and asks who added the signature page.', 'The secretary shows her the attachment came from a folder shared only by Devin and his late father.'],
      ['Father’s Folder', 'Devin opens the folder with Bísí and finds a recorded promise he made to his father about keeping the clinic open.', 'The recording ends with his father saying the building was already promised to Bísí’s mother.'],
      ['The Lagos Call', 'Bísí asks her mother about a nursing exchange she attended decades earlier.', 'Her mother remembers signing a second agreement, and the only copy is in Devin’s aunt’s safe.'],
      ['Auntie’s Safe', 'The aunt agrees to open the safe if Bísí meets her on the anniversary of the clinic’s first day.', 'The agreement is gone, but a recent receipt names Bísí’s prospective employer.'],
      ['Orientation', 'Bísí takes a temporary shift and meets the administrator named on the receipt.', 'He gives her a staff badge with a title she never applied for.'],
      ['The Offer Letter', 'The title would put Bísí in charge of the private practice and secure jobs for the existing nurses.', 'The deadline is the morning of the clinic auction.'],
      ['The Night Shift', 'Bísí asks the nurses what they need to stay and finds enough volunteers to reopen the night service.', 'The last nurse willing to sign asks that Devin be removed from the proposal.'],
      ['Devin’s Vote', 'Devin offers to resign from the board and lets Bísí read his resignation before he sends it.', 'She finds that the board has already recorded his vote to sell the building.'],
      ['Minutes Missing', 'The board secretary helps Bísí reconstruct the meeting from her own notes.', 'One entry says the sale proceeds will go to Devin’s aunt, who insists she has never seen the proposal.'],
      ['The Other Beneficiary', 'The aunt brings her bank statement to Bísí and explains why she agreed to mediate the sale.', 'A transfer made in her name went straight to the childhood friend.'],
      ['An Unpaid Debt', 'The friend opens her books and shows how she paid to keep the clinic staffed through a winter shutdown.', 'Without a buyer or a guarantor, those wages come out of her family’s home.'],
      ['A Better Bid', 'Bísí, the nurses and the friend put together a bid that protects the staff and keeps the clinic public-facing.', 'The only guarantor asks Devin to sign a personal guarantee before Bísí sees the terms.'],
      ['Two Copies', 'Bísí compares the guarantor’s copies and catches a clause putting the new clinic under Devin’s family control.', 'The aunt arrives with another option that would require Bísí to take the practice job and leave Houston.'],
      ['The Auction Bell', 'At the auction Bísí asks for time to present a third option built with the patients themselves.', 'The auctioneer gives her sixty seconds, and the first person to stand up is the aunt who tried to stop her wedding.'],
    ],
    endings: [
      ['Night Lights', 'Bísí asks the nurses to make a bid together in front of everyone.', 'She and Devin begin their marriage on two separate shifts, meeting every morning when the clinic lights turn on.'],
      ['Two City Keys', 'Bísí takes the out-of-town post with a condition that changes what it can fund.', 'Devin joins her on the first commute back to Houston, where the nurses are ready to reopen the doors.'],
      ['A Table for Both', 'Bísí lets the aunt present the family’s offer and insists on a public vote.', 'At their rescheduled wedding meal, Bísí sits at the head of a table set by both families.'],
    ],
  },
  {
    id: 'heir-from-accra',
    title: 'The Heir from Accra',
    pairing: 'African + European',
    lane: 'Royalty',
    language: 'en',
    hook: 'A Ghanaian-British archivist inherits a seat in an old English household and a vote everyone wants.',
    episodes: [
      ['The Empty Chair', 'Akosua, an archivist raised between Accra and London, is called to fill her grandfather’s seat on an English estate council.', 'Her place at dinner is the same chair the household has kept empty for forty years.'],
      ['The Gatehouse', 'Akosua walks the estate and hears that council members intend to sell the gatehouse where tenants run their classes.', 'The eviction dates were entered into the calendar three months before her grandfather died.'],
      ['A Family Portrait', 'She asks the housekeeper why her Ghanaian grandmother appears in no public photographs of the estate.', 'The housekeeper shows her where a figure was cut out of the oldest family portrait.'],
      ['The Restoration', 'A cousin offers Akosua an exhibition budget if she backs the gatehouse sale.', 'The loan agreement requires her to transfer the keys to a chest the council has always treated as hers.'],
      ['The Winter Minutes', 'Akosua pauses the vote and asks to see how her grandfather acquired the council seat.', 'The oldest ledger names her grandmother as the founder and identifies Akosua’s grandfather as her temporary proxy.'],
      ['The Last Proxy', 'Akosua presents the ledger and asks to return the vote to her grandmother’s line.', 'Her mother joins by phone and reveals she is alive on the estate register under a name the council is still using to cast votes.'],
      ['The Second Name', 'Mother and daughter compare the register against a childhood passport photograph.', 'Someone has booked a car to bring the supposed voter to the next meeting.'],
      ['A Seat at Dinner', 'Akosua insists on meeting the woman traveling in her mother’s name.', 'The woman arrives wearing the pendant Akosua’s mother says she lost the day she left England.'],
      ['The Pendant', 'The visitor explains that Akosua’s mother gave the pendant to a gatehouse teacher before leaving.', 'The woman produces a letter inviting the teacher to take a vote in her place.'],
      ['Letters of Trust', 'Akosua asks who changed a temporary invitation into a permanent ballot.', 'The first extension was signed by her mother, the second by a cousin born after the date on it.'],
      ['The Long Hall', 'The cousin helps Akosua search accounts from the year of the impossible signature.', 'They find a payment to buy the gatehouse out of a sale that never happened.'],
      ['On the Map', 'An estate map shows the gatehouse sits on land held by a separate educational trust.', 'The survey marker for the trust boundary has been removed overnight.'],
      ['The Surveyor', 'Akosua shows the surveyor a photograph from a class held on the lawn.', 'The photograph captures her grandfather moving the marker himself.'],
      ['Grandfather’s Instructions', 'A recording of her grandfather explains that the moved marker bought the school one extra term.', 'He says the council would lose its charter if the unaltered map ever surfaced.'],
      ['The Term Ends', 'The gatehouse students ask Akosua for one term to raise the money themselves.', 'The lender offers to give them the time if the council chair steps down that night.'],
      ['A Different Chair', 'Akosua’s cousin says she is willing to resign and asks Akosua to take her place.', 'The offer names Akosua as sole guarantor for a debt she has never seen.'],
      ['The Ledgers Open', 'Akosua opens the accounts to the tenants and the council at the same table.', 'The housekeeper recognizes payments to a scholarship that a council member says never existed.'],
      ['The Scholars', 'Two former students come forward with receipts their parents kept.', 'The final scholarship receipt is addressed to the buyer who wants to close the gatehouse.'],
      ['The Buyer Returns', 'Akosua invites the buyer to the classroom where he learned to read.', 'He agrees to postpone the sale if she can produce one signature from the founder’s line.'],
      ['The Founder’s Line', 'Akosua seats her mother at the council table and gives her the pen.', 'Her mother pushes the charter back and asks whether the room will sign it if the first vote goes to the tenants.'],
    ],
    endings: [
      ['The Open Charter', 'Akosua puts the tenant vote on the table before the council can choose a chair.', 'The estate keeps its classrooms, and an unused portrait frame holds the new charter.'],
      ['Accra Holds the Key', 'Akosua carries the estate archive home to the side of the family that began it.', 'From Accra she oversees a new school exchange that starts at the gatehouse.'],
      ['The House of Classes', 'Akosua asks the buyer to back a school that can buy back the land itself.', 'The teachers take the keys, and the family council meets in a classroom beside them.'],
    ],
  },
  {
    id: 'reading-of-the-will',
    title: 'The Reading of the Will',
    pairing: 'African + African',
    lane: 'Black Wealth',
    language: 'en',
    hook: 'Three Lagos siblings arrive to divide their mother’s fortune and find she left them control of each other’s futures.',
    episodes: [
      ['Place Settings', 'Nkem returns to Lagos to keep her mother’s garment business intact while her two siblings prepare to cash out.', 'The late matriarch’s nameplate is placed at the table beside a sealed envelope marked for the staff.'],
      ['One Share Each', 'The siblings each receive one vote and learn that the staff envelope contains the deciding share.', 'Its recipient, a cutter called Tola, fails to arrive for a shift she has never missed.'],
      ['The Fitting Room', 'Nkem finds Tola’s work unfinished and asks the floor manager to keep the machines running.', 'The manager shows her a schedule that moves the entire staff to a factory the family never owned.'],
      ['Another Factory', 'Nkem visits the new premises with her brother Obi and discovers the equipment was bought with money from their mother’s estate.', 'The keys are held by their younger sister Ify, who says their mother promised her a separate company.'],
      ['The Family Sample', 'Ify offers to bring the workshop back if the three sign a plan for independent staff ownership.', 'The proposal carries Tola’s signature, dated a day before she went missing.'],
      ['The Daughter’s Share', 'Tola walks into the reading and asks for the staff vote without taking a seat at the family table.', 'A sealed letter reveals that she is their mother’s first child and that every sibling signed a document years ago surrendering their vote if they contested hers.'],
      ['The Old Signatures', 'Nkem remembers signing what she thought was a college tuition form and asks her siblings to find their copies.', 'Obi’s copy is countersigned by Tola herself.'],
      ['A Date on a Hem', 'Tola shows Nkem the date stitched into the first coat she made for their mother.', 'It matches the opening date of a second workshop their mother kept off the company books.'],
      ['Second Shift', 'The four arrive at the other workshop and meet former employees who have been running it as a cooperative.', 'The co-op has been paying the family’s overdue rent for months.'],
      ['Obi’s Spreadsheet', 'Obi asks to see the accounts and finds how the family business could repay the cooperative.', 'He recognizes a recurring payment he authorized to an address he thought was their mother’s house.'],
      ['The Address', 'Nkem visits the house to look for evidence of where the money went.', 'A wall is covered in staff graduation pictures, with a photograph of Ify among the first class.'],
      ['Night School', 'Ify admits their mother funded her training through the staff school and says she only recently learned the school’s cost.', 'Their mother left Ify a list of students still owed a final payment.'],
      ['The Gift List', 'Nkem works with the floor manager to settle the unpaid school stipends.', 'The last student on the list is the accountant who prepared the estate inventory.'],
      ['An Unlisted Pattern', 'The accountant shows them a set of patterns that brought in most of the company’s money.', 'The ownership page assigns those patterns to someone whose name was removed from the inventory.'],
      ['Who Drew It', 'Tola recognizes a pattern her mother used to cut from newsprint and asks for the original sketch.', 'It bears both women’s initials and a note asking Tola to share it with the floor.'],
      ['The Offer', 'Nkem shows the floor how pattern ownership could keep jobs funded independent of the family.', 'A buyer gives the siblings a day to sell together at a price the staff cannot match.'],
      ['The Vote Book', 'The three siblings ask Tola whether she would use the deciding share to keep the cooperative open.', 'She says she already cast her vote, and the floor manager is carrying the result.'],
      ['Four Hands', 'The floor manager reveals that the deciding vote supports a four-way transfer with seats for garment workers.', 'The lender has a right to reject the transfer, and Obi has already asked it to do so.'],
      ['Obi at the Door', 'Obi returns with proof that the lender will lift the restriction if the properties are divided.', 'The buyer files an offer on the original workshop just as the first staff member arrives to vote.'],
      ['Roll Call', 'Nkem reads each worker’s name and lets each ask a question about their place after the transfer.', 'Tola places a second sealed envelope on the table and tells Nkem to open it only after her own vote is recorded.'],
    ],
    endings: [
      ['The Floor Owns It', 'Nkem backs the staff transfer and opens the envelope before anyone leaves.', 'Tola takes the first apprentice into a workshop whose voting book now starts with the workers’ names.'],
      ['Three Houses', 'The siblings divide the properties and give the old shop’s floor a choice of where to work.', 'Their mother’s patterns outlast the family banner that once hung over every door.'],
      ['The Fourth Place', 'Nkem calls Tola to the empty place at the table and asks her to name the first condition of a shared company.', 'The four siblings read their mother’s last note over a meal they set up together.'],
    ],
  },
  {
    id: 'luanda-to-salvador',
    title: 'Luanda to Salvador',
    pairing: 'African + Afro-Brazilian',
    lane: 'Triumph',
    language: 'pt',
    hook: 'An Angolan chef opens a restaurant in Bahia, then finds that someone has sold her family’s signature dish.',
    episodes: [
      ['A Stove in Bahia', 'Angolan chef Lídia arrives in Salvador with her grandmother’s recipe book and a lease on a six-table restaurant.', 'A sign in the window already announces an opening under another chef’s name.'],
      ['The Other Key', 'Joana, a Bahian cook, turns up with her own key and the same promise from the landlord.', 'Their two leases contain one shared condition requiring them to open the kitchen together.'],
      ['First Service', 'The cooks trial a dinner where each dish can be served two ways, then invite the street in.', 'A guest orders Lídia’s grandmother’s private recipe by its family nickname.'],
      ['The Sponsor’s Menu', 'The guest offers to cover a year of rent if Lídia takes the family dish off the printed menu.', 'He leaves behind a draft menu listing the dish at a rival restaurant across town.'],
      ['A Kitchen Photograph', 'Joana helps Lídia look through photographs from her grandmother’s travels to Bahia.', 'One photograph shows the sponsor as a child sitting in the original kitchen with Joana’s mother.'],
      ['Grandmother’s Hand', 'Lídia serves the dish at opening night and credits both kitchens in the dining room.', 'The sponsor brings out a contract in her grandmother’s handwriting giving exclusive rights to the recipe to Lídia’s own mother.'],
      ['The Call Home', 'Lídia asks her mother why she signed and learns she was trying to save her own kitchen in Luanda.', 'Her mother says the signature was conditional on a debt staying unpaid and asks Lídia to find the last receipt.'],
      ['The Receipt Tin', 'Joana finds a tin from the old kitchen in her mother’s apartment.', 'A receipt shows the last payment was made to the landlord who gave them both keys.'],
      ['Rent Day', 'The cooks invite the landlord to dinner and ask where the payment went.', 'He says the money was returned and points them to a delivery address inside the city market.'],
      ['Market Stall', 'Lídia visits the market stall and asks the two sisters there about the old delivery.', 'The sisters recognize the recipe book and say there is a missing page.'],
      ['One More Ingredient', 'Joana helps Lídia remake the dish from the stallholders’ memory.', 'When Lídia compares the result with her grandmother’s notes, she finds the recipe the sponsor plans to serve belongs to Joana’s family.'],
      ['The Tasting', 'The cooks invite the families to taste both versions side by side.', 'The sponsor agrees they are different, then asks Joana to sign with him alone.'],
      ['Joana’s Counter', 'Joana asks for ownership and wages for her kitchen in return for the recipe.', 'The sponsor agrees, as long as the clause closing Lídia’s restaurant stays in place.'],
      ['The Side Door', 'Lídia moves service into the courtyard while Joana refuses to accept the clause.', 'A city inspector comes through the side door with a closure notice signed by their landlord.'],
      ['A Portable Kitchen', 'The market sisters lend them burners and a table for the weekend.', 'A festival organizer offers them a permanent stall if one of them can produce a release from the original agreement.'],
      ['The Flight In', 'Lídia’s mother comes to Salvador carrying an envelope full of delivery slips.', 'The only slip marked as settled names the sponsor’s mother as the payer.'],
      ['Her Own Recipe', 'Joana brings the sponsor’s mother to the market and makes her a plate from memory.', 'The woman says she kept the original release and promised to return it only if both cooks asked her together.'],
      ['At the Same Table', 'The cooks ask for the release in the kitchen where they first cooked together.', 'The sponsor’s mother gives it to them with an invitation to take over her company kitchen.'],
      ['Six Chairs or Sixty', 'Joana wants the larger room for apprentices, while Lídia wants the smaller room to keep a place for the market cooks.', 'The landlord offers to sell them their first premises if they can choose a buyer before midnight.'],
      ['The Doors Open', 'At a final pop-up, Lídia brings the lease, the release and an empty menu to the table.', 'Joana sets down a third set of keys whose tag carries both their grandmothers’ initials.'],
    ],
    endings: [
      ['Open Kitchen', 'Lídia asks every person who saved the restaurant to take a seat before she signs.', 'The cooks keep their six tables and use the rest of the building to teach market apprentices.'],
      ['Across Both Waters', 'Lídia and Joana put the two kitchens on the same menu and ask their mothers to choose the first service.', 'The families trade recipes between Luanda and Salvador while each restaurant keeps its own name.'],
      ['A Place in the Market', 'Joana takes the third keys to the market sisters and asks what they were intended to open.', 'The first night at the new stall begins with a handwritten credit under each dish.'],
    ],
  },
  {
    id: 'guangzhou',
    title: 'Guangzhou',
    pairing: 'African + Chinese',
    lane: 'Romance',
    language: 'en',
    hook: 'A Ghanaian trader and a Guangzhou factory owner’s daughter risk two families’ livelihoods over a shipment they both signed.',
    episodes: [
      ['The Sample Room', 'Kwame, a Ghanaian school-supply trader, comes to Guangzhou to place the first large order for his own company.', 'Mei, the quality lead, shows him his approved sample beside a cheaper copy already on the loading floor.'],
      ['The Swap', 'Kwame and Mei agree to pause shipment until they can count the genuine units.', 'The warehouse supervisor produces a message authorizing the swap from Kwame’s company account.'],
      ['The Shop in Accra', 'Kwame’s sister checks the company account from Accra and finds the order was paid for before she saw the invoice.', 'The extra payment came from a factory account controlled by Mei’s father.'],
      ['A Day Off', 'Mei shows Kwame the small workshop where she wants to develop her own products, and they share their first meal away from work.', 'Her father calls to say he has sold the workshop’s equipment to cover the paused shipment.'],
      ['The Air Waybill', 'Kwame offers to pay for a smaller order himself if Mei can find enough genuine stock for the schools opening first.', 'She finds it booked for collection under a name she recognizes as her father’s former business partner.'],
      ['The Double Contract', 'Kwame and Mei reach the dispatch office just before the genuine stock leaves.', 'The partner shows them a new contract bearing both their signatures and a clause assigning the debt to Kwame’s sister’s shop in Accra.'],
      ['Hold at the Gate', 'Mei asks for a temporary hold while Kwame calls the shop to check whether anyone there saw the contract.', 'His sister admits she signed one page thinking it was the invoice for the real order.'],
      ['The Translated Page', 'The two compare the copies with a translator familiar with purchase orders.', 'The page promising to ship genuine stock disappears from the version held at the dispatch office.'],
      ['A Paper Trail', 'Mei asks the line supervisor to print the order versions from a factory terminal.', 'The supervisor’s job card shows she was transferred off the line before the switch.'],
      ['Mother’s Desk', 'Mei asks her mother who could override the line supervisor’s card.', 'Her mother opens a drawer full of sales records she kept before giving up her seat on the board.'],
      ['One Order Number', 'Kwame matches his order number with a factory entry for a shipment he never bought.', 'The destination is the same school his trade order was supposed to supply first.'],
      ['The School List', 'His sister calls the school and learns a donor promised the supplies as a gift.', 'The donor’s name belongs to Kwame’s own late father.'],
      ['A Promise in Accra', 'Kwame’s sister remembers their father promising to outfit his school before he died.', 'The payment ledger shows someone in Guangzhou has continued making the donations in his name.'],
      ['Why He Paid', 'Mei’s father shows them his original agreement to help Kwame’s father as long as the factory could afford it.', 'This year’s payment cleared on the same day the factory missed payroll.'],
      ['Pay Day', 'Mei organizes a meeting with workers and asks what they would need to finish a small run.', 'The only machine built for it is already strapped onto a truck headed for sale.'],
      ['The Machine’s Price', 'Kwame offers to purchase the machine with the deposit he intended for the shipment.', 'The dealer says the machine can leave only if Mei’s father gives up the design rights.'],
      ['Mei’s Drawings', 'Mei opens her drawings to show why she owns the changes that made the school supplies affordable.', 'Her father offers to put that ownership in writing if she signs an agreement to stay in Guangzhou.'],
      ['Tickets Home', 'Kwame buys a ticket home and asks his sister to prepare a new supply plan without the factory.', 'At the gate he receives a photo of the factory workers voting on Mei’s own proposal.'],
      ['A Smaller Order', 'He returns to sign a smaller contract that would let Mei and the workers begin production on their terms.', 'The buyer’s signature line names Mei’s father and the workers have left it unsigned.'],
      ['Last Collection', 'With the trucks waiting, Mei asks Kwame what he is willing to risk on a route that belongs to both of them.', 'The warehouse door opens, and her father walks in holding the only copy of the competing contract.'],
    ],
    endings: [
      ['The First Crate', 'Kwame invites Mei’s father to sign as a witness and lets the workers set the terms.', 'Mei follows the first crate to Accra and stays to draw the next design with the school.'],
      ['Two Keys, One Court', 'Mei proposes that they split the businesses and keep the family’s old promise on both invoices.', 'She hands Kwame a second apartment key before his next flight.'],
      ['Made Together', 'Kwame asks the schools to commission a new line directly from Mei’s workshop.', 'They meet at the same sample table, this time on equal sides of a contract they wrote together.'],
    ],
  },
  {
    id: 'first-lady',
    title: 'First Lady',
    pairing: 'African + African',
    lane: 'Black Wealth',
    language: 'fr',
    hook: 'In a fictional West African state, the president’s wife runs the country from her kitchen until the people she feeds demand a seat.',
    episodes: [
      ['Soup Before Cabinet', 'First lady Aïssata uses her kitchen table to keep food deliveries running while ministers argue over the national budget.', 'The president announces on the radio that the deliveries have been suspended.'],
      ['The Last Sack', 'Aïssata persuades market stewards to release a shipment on the promise the cabinet will pay them back.', 'Her oldest steward returns with an order to send the shipment to the palace.'],
      ['A Meal for Who', 'Aïssata serves the palace meal in the outer courtyard so neighborhood cooks can pick up their share.', 'A clerk asks her to sign the dispatch book against the official title of acting president.'],
      ['The Wrong Title', 'She returns the book unsigned and asks the clerk which office issued the title.', 'The clerk shows her a ballot proposal that lists her husband and herself on opposite sides.'],
      ['Her Husband’s Word', 'Aïssata asks the president to denounce the proposal and gives him the wording to read at cabinet.', 'He uses her speech to announce a vote on the closure of neighborhood kitchens instead.'],
      ['The Hand Beneath the Table', 'Aïssata brings the cooks to cabinet and demands to know who moved their emergency reserve.', 'A decree transfers the kitchens to her brother’s company under her own signature, and the president says he signed as her witness.'],
      ['A Seat for the Cooks', 'At home, the cooks ask Aïssata to hand over records of everything she has instructed them to do.', 'One of the unsigned pages is annotated in her daughter’s handwriting.'],
      ['Her Daughter’s Notebook', 'Aïssata’s daughter explains that she kept notes so the kitchens could seek payment if the palace cut them off.', 'The head clerk has been sending those same notes to the chamber that can remove the president.'],
      ['The Public Address', 'Aïssata agrees to speak where the cooks can hear her answer questions in their own words.', 'The speaker gives her the floor and asks her to account for a shipment her brother said never existed.'],
      ['The Receipt Wall', 'The cooks pin their delivery receipts up for people to read and count.', 'Several duplicate copies carry the same date and a destination across the northern border.'],
      ['Northbound', 'Aïssata sends the cooks’ elected steward to ask where the trucks were turned around.', 'The steward finds that Aïssata’s brother bought passage for families traveling back toward the capital.'],
      ['His Side of It', 'Her brother shows her the receipts from the families he helped and explains why he borrowed against the kitchens.', 'The loan came from a minister who now holds the deed to their mother’s home.'],
      ['Mother’s House', 'Aïssata asks her mother if she knew about the loan and offers to help save the house.', 'Her mother says she signed willingly and wants her money used to keep the market open.'],
      ['The Market Vote', 'The market stewards propose repaying the loan through a fund they would run themselves.', 'The minister offers to wipe the debt if Aïssata publicly endorses him for president.'],
      ['Her Own Speech', 'Aïssata turns down the endorsement and writes her first public speech without sending it through the palace.', 'Her daughter brings her the president’s resignation letter an hour before the speech is due.'],
      ['The Resignation', 'The president tells Aïssata the resignation gives the chamber time to unwind the decree.', 'She learns that the interim cabinet can close the kitchens the moment he leaves his seat.'],
      ['Thirty Chairs', 'Aïssata invites one cook from each district to propose a successor arrangement at the kitchen table.', 'The last chair is taken by a woman who says she came to collect an old promise from Aïssata herself.'],
      ['The First Promise', 'The woman repeats the promise Aïssata made when she opened the first independent kitchen.', 'A recording of the same promise ends with Aïssata’s pledge to resign if the palace ever took the kitchens over.'],
      ['The Counter-Decree', 'The cooks draft their own terms and ask Aïssata to carry them into the chamber.', 'Her brother says he will dissolve his company only if she gives him her authority to sign.'],
      ['The Last Service', 'Aïssata carries a pot into the chamber and offers a bowl to each person who will have to vote.', 'The president takes the last bowl, places his signed resignation beside it and asks her to pick which document gets read first.'],
    ],
    endings: [
      ['The Cooks’ Decree', 'Aïssata calls the cooks in and lets their elected steward read the first document.', 'The vote puts the kitchens into their hands and opens the palace courtyard for their first independent service.'],
      ['An Empty Palace', 'Aïssata honors her old promise and puts her own public role to a vote.', 'At home she starts the next day by cooking with her daughter in a kitchen that can close whenever they choose.'],
      ['The Open Chamber', 'Aïssata asks the speaker to read both documents aloud and name everyone who signed them.', 'The stewards arrive for their first session with the household bowls they have used to serve their neighborhoods.'],
    ],
  },
];

export type StoryItem = {
  id: string;
  number: number;
  title: string;
  synopsis: readonly [string, string];
  durationSeconds: number;
  mediaPath: string;
  subtitles: Record<Locale, string | null>;
};

function storyItem(
  seriesId: string,
  kind: 'episode' | 'ending',
  [title, setup, turn]: StoryBeat,
  index: number,
): StoryItem {
  const number = index + 1;
  const id = `${seriesId}-${kind}-${number}`;
  return {
    id,
    number,
    title,
    synopsis: [setup, turn],
    durationSeconds: EPISODE_SECONDS,
    mediaPath: `/media/${id}.mp4`,
    subtitles: { en: null, pt: null, fr: null, es: null, zh: null },
  };
}

export const SERIES = drafts.map(({ episodes, endings, ...series }) => ({
  ...series,
  episodes: episodes.map((beat, index) => storyItem(series.id, 'episode', beat, index)),
  endings: endings.map((beat, index) => storyItem(series.id, 'ending', beat, index)),
}));

export const LANE_SHELVES = LANES.map((lane) => ({
  lane,
  series: SERIES.filter((series) => series.lane === lane),
})).filter(({ series }) => series.length > 0);
