import Cart from "../models/Carts.js";
import Product from "../models/Product.js";

// Add Item To Cart

export const AddToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
    } else {
      const item = cart.items.find((i) => i.productId.toString() === productId);

      if (item) {
        item.quantity += 1;
      } else {
        cart.items.push({ productId, quantity: 1 });
      }
    }

    await cart.save();
    res.json({
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//Remove item from Cart

export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }

    cart.items = cart.items.filter((i) => i.productId.toString() !== productId);

    await cart.save();
    res.json({
      message: "Item Removed from Cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//Update Itmes Cart

export const UpdateQuantity = async (req, resp) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return resp.status(400).json({ message: "Cart not found" });
    }
    const item = cart.items.find((i) => i.productId.toString() === productId);

    if (!item) {
      return resp.status(404).json({ message: "item not found in cart" });
    }

    item.quantity = quantity;

    await cart.save();
    resp.json({
      message: "Item quantity changed",
      cart,
    });
  } catch (error) {
    resp.status(500).json({ message: "Server Error", error });
  }
};

//get cart by user Id

export const getCartByuserId = async (req, resp) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    resp.json(cart);
  } catch (error) {
    resp.status(500).json({ message: "server Error", error });
  }
};
