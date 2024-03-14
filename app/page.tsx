'use client'
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, codigo: "001", descricao: "Produto 1", preco: 10, estoqueAtual: 20, estoqueMinimo: 5 },
    { id: 2, codigo: "002", descricao: "Produto 2", preco: 20, estoqueAtual: 15, estoqueMinimo: 5 },
    // Adicione mais produtos conforme necessário
  ]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newProduct, setNewProduct] = useState({
    codigo: "",
    descricao: "",
    preco: 0,
    estoqueAtual: 0,
    estoqueMinimo: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: prevProducts.length + 1 }]);
    setNewProduct({
      codigo: "",
      descricao: "",
      preco: 0,
      estoqueAtual: 0,
      estoqueMinimo: 0
    });
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <>
      <title>Gestão Produto</title>
      <div className="p-4 border-2 border-black w-3/5 h-3/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Gestão de Produtos</h1>
        <Button color="success" onClick={onOpen}>Adicionar Produto</Button>
        <table className="text-2xl font-bold mb-6 mx-auto my-auto">
          <thead>
            <tr>
              <th className="col py-2 px-4">Código</th>
              <th className="col py-2 px-4">Descrição</th>
              <th className="col py-2 px-4">Preço</th>
              <th className="col py-2 px-4">Estoque Atual</th>
              <th className="col py-2 px-4">Estoque Mínimo</th>
              <th className="col py-2 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border py-2 px-4">{product.codigo}</td>
                <td className="border py-2 px-4">{product.descricao}</td>
                <td className="border py-2 px-4">{product.preco}</td>
                <td className="border py-2 px-4">{product.estoqueAtual}</td>
                <td className="border py-2 px-4">{product.estoqueMinimo}</td>
                <td className="border py-2 px-4">
                  <Button onClick={() => handleDeleteProduct(product.id)} color="success">Excluir</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
          {(onClose) => (
              <>
                  <ModalHeader>Adicionar Produto</ModalHeader>
                  <ModalBody>
                      <div className="flex flex-col space-y-4 ">
                          <input
                              type="text"
                              name="codigo"
                              placeholder="Código"
                              value={newProduct.codigo}
                              onChange={handleChange}
                              className="input"
                          />
                          <input
                              type="text"
                              name="descricao"
                              placeholder="Descrição"
                              value={newProduct.descricao}
                              onChange={handleChange}
                              className="input"
                          />
                          <input
                              type="number"
                              name="preco"
                              placeholder="Preço"
                              value={newProduct.preco}
                              onChange={handleChange}
                              className="input"
                          />
                          <input
                              type="number"
                              name="estoqueAtual"
                              placeholder="Estoque Atual"
                              value={newProduct.estoqueAtual}
                              onChange={handleChange}
                              className="input"
                          />
                          <input
                              type="number"
                              name="estoqueMinimo"
                              placeholder="Estoque Mínimo"
                              value={newProduct.estoqueMinimo}
                              onChange={handleChange}
                              className="input"
                          />                            
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button onClick={handleAddProduct} color="success">Adicionar</Button>
                      <Button onClick={onClose} color="success">Fechar</Button>
                  </ModalFooter>
              </>
          )}       
      </ModalContent>
    </Modal>
    </>
  );
}
