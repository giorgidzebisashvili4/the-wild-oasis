import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { format } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { ro } from "date-fns/locale";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce(
    (total, booking) => total + booking.totalPrice,
    0
  );

  const checkins = confirmedStays.length;

  const occupancyRate =
    confirmedStays.reduce((total, stay) => total + stay.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        color="blue"
        title="Bookings"
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        color="green"
        title="Sales"
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        title="Check ins"
        value={checkins}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        color="yellow"
        title="Occupancy rate"
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
}

export default Stats;
