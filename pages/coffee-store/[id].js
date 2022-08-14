import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router.query.id)
  return (
		<>
			<div>Coffee Store {router.query.id}</div>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
			<Link href="/coffee-store/dynamic">
				<a>Go to Dynamic Page</a>
			</Link>
		</>
	);
}

export default CoffeeStore