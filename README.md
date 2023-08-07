# workshop_api
create .env

PORT=3000
HOST=localhost
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=


create DATABASE:

CREATE TABLE rol (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
)ENGINE=InnoDB;
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100),
  rol_id INT,
  FOREIGN KEY (rol_id) REFERENCES rol(id)
)ENGINE=InnoDB;

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', ''),
(2, 'Remeras', ''),
(3, 'LLaveros', '');

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `licence_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`) VALUES
(1, 'Star Wars', ''),
(2, 'Pokemon', ''),
(3, 'Harry Potter', ''),
(4, 'Naruto Shippuden', '');

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_descsription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `sku` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dues` int(11) NOT NULL,
  `image_front` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_back` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `licence_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `licence_id` (`licence_id`) USING BTREE,
  ADD KEY `category_id` (`category_id`) USING BTREE;

ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `licence`
  MODIFY `licence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

INSERT INTO `product` (`product_id`, `product_name`, `product_descsription`, `price`, `stock`, `sku`, `dues`, `image_front`, `image_back`, `licence_id`, `category_id`) VALUES
(1, 'Baby Yoda Blueball', 'Disfruta de una saga que sigue agregando personajes a su colección.', '1799.00', 10, 'STW001001', 10, '/img/star-wars/baby-yoda-1.webp', '/img/star-wars/baby-yoda-box.webp', 1, 1),
(2, 'Vulpix Fancy', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', '1799.00', 10, 'PKM001001', 10, '/img/pokemon/vulpix-1.webp', '/img/pokemon/vulpix-box.webp', 2, 1),
(3, 'Snape Patronus', 'Revive los recuerdos de una saga llena de magia y encanto.', '1799.00', 10, 'HPT001001', 10, '/img/harry-potter/snape-patronus-1.webp', '/img/harry-potter/snape-patronus-box.webp', 3, 1);