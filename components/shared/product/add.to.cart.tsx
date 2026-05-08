"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { CartItem } from "@/types";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(res.message, {
      action: {
        label: "Go to Cart",
        onClick: () => router.push("/cart"),
      },
    });

    router.refresh();
  };

  return (
    <Button className="w-full cursor-pointer" type="button" onClick={handleAddToCart}>
      <Plus/> Add To Cart
    </Button>
  );
};

export default AddToCart;
