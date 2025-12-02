-- MobileWeb 範例資料導入
-- 在 Neon SQL 編輯器中執行此文件

-- 1. 插入品牌資料
INSERT INTO brands (name, description, logo) VALUES
('Apple', 'Apple Inc. - 美國科技公司，iPhone 製造商', 'https://via.placeholder.com/100?text=Apple'),
('Samsung', '三星 - 韓國電子公司', 'https://via.placeholder.com/100?text=Samsung'),
('Google', 'Google - 美國科技公司，Pixel 製造商', 'https://via.placeholder.com/100?text=Google'),
('OnePlus', '一加 - 中國智慧手機品牌', 'https://via.placeholder.com/100?text=OnePlus'),
('Xiaomi', '小米 - 中國智慧手機製造商', 'https://via.placeholder.com/100?text=Xiaomi'),
('ASUS', '華碩 - 台灣科技公司', 'https://via.placeholder.com/100?text=ASUS'),
('HTC', 'HTC - 台灣智慧手機製造商', 'https://via.placeholder.com/100?text=HTC');

-- 2. 插入手機資料（本月熱門 Top 20）
INSERT INTO phones (name, brand_id, official_price, site_price, image_url, specs, popularity, is_active) VALUES
-- Apple 手機
('iPhone 15 Pro Max', 1, 36990, 35990, 'https://via.placeholder.com/400?text=iPhone+15+Pro',
  '{"size":"159.9 x 77.8 x 8.25 mm","weight":"240g","cpu":"Apple A17 Pro","memory":"8GB","storage":"256GB/512GB/1TB","display":"6.7" Super Retina XDR","camera":"48MP+12MP+12MP","battery":"4323mAh","colors":["Black","White","Gold","Deep Purple"]}', 1, true),

('iPhone 15 Pro', 1, 29990, 28990, 'https://via.placeholder.com/400?text=iPhone+15+Pro',
  '{"size":"147.6 x 71.6 x 7.80 mm","weight":"187g","cpu":"Apple A17 Pro","memory":"8GB","storage":"128GB/256GB/512GB","display":"6.1" Super Retina XDR","camera":"48MP+12MP+12MP","battery":"3240mAh","colors":["Black","White","Gold","Deep Purple"]}', 2, true),

('iPhone 15', 1, 25990, 24990, 'https://via.placeholder.com/400?text=iPhone+15',
  '{"size":"147.80 x 71.8 x 7.80 mm","weight":"171g","cpu":"Apple A16 Bionic","memory":"6GB","storage":"128GB/256GB/512GB","display":"6.1" Liquid Retina","camera":"48MP+12MP","battery":"3349mAh","colors":["Black","White","Pink","Yellow"]}', 3, true),

('iPhone 15 Plus', 1, 28990, 27990, 'https://via.placeholder.com/400?text=iPhone+15+Plus',
  '{"size":"160.9 x 77.8 x 7.80 mm","weight":"201g","cpu":"Apple A16 Bionic","memory":"6GB","storage":"128GB/256GB/512GB","display":"6.7" Liquid Retina","camera":"48MP+12MP","battery":"4323mAh","colors":["Black","White","Pink","Yellow"]}', 4, true),

-- Samsung 手機
('Samsung Galaxy S24 Ultra', 2, 32990, 31990, 'https://via.placeholder.com/400?text=Galaxy+S24+Ultra',
  '{"size":"162.8 x 79.0 x 8.6 mm","weight":"232g","cpu":"Snapdragon 8 Gen 3","memory":"12GB/16GB","storage":"256GB/512GB/1TB","display":"6.8" Dynamic AMOLED 2X","camera":"200MP+50MP+10MP+10MP","battery":"5000mAh","colors":["Onyx Black","Titanium Gray","Titanium Violet"]}', 5, true),

('Samsung Galaxy S24+', 2, 28990, 27990, 'https://via.placeholder.com/400?text=Galaxy+S24+Plus',
  '{"size":"158.5 x 74.1 x 8.3 mm","weight":"196g","cpu":"Snapdragon 8 Gen 3","memory":"12GB","storage":"256GB/512GB","display":"6.7" Dynamic AMOLED 2X","camera":"50MP+10MP+10MP","battery":"4900mAh","colors":["Onyx Black","Marble Gray","Cobalt Violet"]}', 6, true),

('Samsung Galaxy S24', 2, 24990, 23990, 'https://via.placeholder.com/400?text=Galaxy+S24',
  '{"size":"147.0 x 70.6 x 8.6 mm","weight":"167g","cpu":"Snapdragon 8 Gen 3","memory":"8GB/12GB","storage":"256GB/512GB","display":"6.2" Dynamic AMOLED 2X","camera":"50MP+12MP+12MP","battery":"4000mAh","colors":["Onyx Black","Cobalt Violet","Gray","Amber Yellow"]}', 7, true),

-- Google 手機
('Google Pixel 8 Pro', 3, 26990, 25990, 'https://via.placeholder.com/400?text=Pixel+8+Pro',
  '{"size":"159 x 79.5 x 8.5 mm","weight":"221g","cpu":"Google Tensor G3","memory":"12GB","storage":"128GB/256GB","display":"6.7" OLED QHD+","camera":"50MP+48MP+48MP","battery":"5050mAh","colors":["Obsidian","Porcelain","Bay"]}', 8, true),

('Google Pixel 8', 3, 19990, 18990, 'https://via.placeholder.com/400?text=Pixel+8',
  '{"size":"150.5 x 72 x 8.5 mm","weight":"187g","cpu":"Google Tensor G3","memory":"8GB","storage":"128GB/256GB","display":"6.2" OLED FHD+","camera":"50MP+12MP","battery":"4700mAh","colors":["Obsidian","Porcelain","Mint"]}', 9, true),

-- OnePlus 手機
('OnePlus 12', 4, 22990, 21990, 'https://via.placeholder.com/400?text=OnePlus+12',
  '{"size":"164.3 x 75.3 x 9.2 mm","weight":"220g","cpu":"Snapdragon 8 Gen 3","memory":"12GB/16GB","storage":"256GB/512GB","display":"6.7" AMOLED","camera":"50MP+48MP+48MP","battery":"5400mAh","colors":["Silky Black","Silky White"]}', 10, true),

('OnePlus 12R', 4, 18990, 17990, 'https://via.placeholder.com/400?text=OnePlus+12R',
  '{"size":"162.1 x 75 x 8.8 mm","weight":"207g","cpu":"Snapdragon 8 Gen 3 Leading Version","memory":"12GB","storage":"256GB","display":"6.7" AMOLED","camera":"50MP+8MP+2MP","battery":"5500mAh","colors":["Cool Black","Silky White"]}', 11, true),

-- Xiaomi 手機
('Xiaomi 14 Ultra', 5, 20990, 19990, 'https://via.placeholder.com/400?text=Xiaomi+14+Ultra',
  '{"size":"161.1 x 75 x 8.2 mm","weight":"220g","cpu":"Snapdragon 8 Gen 3","memory":"12GB/16GB","storage":"512GB/1TB","display":"6.73" AMOLED","camera":"50MP+50MP+50MP+50MP","battery":"5300mAh","colors":["Phantom Black","Cloud White"]}', 12, true),

('Xiaomi 14', 5, 15990, 14990, 'https://via.placeholder.com/400?text=Xiaomi+14',
  '{"size":"160.5 x 74.05 x 7.8 mm","weight":"197g","cpu":"Snapdragon 8 Gen 3","memory":"12GB/16GB","storage":"256GB/512GB","display":"6.36" AMOLED","camera":"50MP+50MP+12MP","battery":"4610mAh","colors":["Black","White","Gold"]}', 13, true),

-- ASUS 手機
('ASUS ROG Phone 8 Pro', 6, 24990, 23990, 'https://via.placeholder.com/400?text=ROG+Phone+8+Pro',
  '{"size":"163.8 x 76.8 x 8.8 mm","weight":"228g","cpu":"Snapdragon 8 Gen 3","memory":"16GB","storage":"512GB","display":"6.78" AMOLED","camera":"50MP+13MP+13MP","battery":"5500mAh","colors":["AI Phantom Black","AI Phantom White"]}', 14, true),

('ASUS ROG Phone 8', 6, 19990, 18990, 'https://via.placeholder.com/400?text=ROG+Phone+8',
  '{"size":"163.7 x 76.7 x 8.3 mm","weight":"215g","cpu":"Snapdragon 8 Gen 3","memory":"12GB/16GB","storage":"256GB/512GB","display":"6.78" AMOLED","camera":"50MP+13MP+13MP","battery":"5500mAh","colors":["Midnight Black","Pearl White"]}', 15, true),

-- HTC 手機
('HTC U23 Pro', 7, 18990, 17990, 'https://via.placeholder.com/400?text=HTC+U23+Pro',
  '{"size":"162.81 x 77.0 x 8.7 mm","weight":"199g","cpu":"Snapdragon 7+ Gen 2","memory":"12GB","storage":"256GB","display":"6.7" AMOLED","camera":"108MP+50MP+13MP","battery":"4800mAh","colors":["Midnight Black","Precious Orange"]}', 16, true),

('HTC U23', 7, 16990, 15990, 'https://via.placeholder.com/400?text=HTC+U23',
  '{"size":"161.94 x 75.73 x 8.5 mm","weight":"188g","cpu":"Snapdragon 7+ Gen 2","memory":"8GB/12GB","storage":"256GB","display":"6.56" AMOLED","camera":"108MP+50MP+13MP","battery":"4400mAh","colors":["Midnight Black","Star Silver","Precious Orange"]}', 17, true),

-- 添加更多熱門手機以達到前 20
('iPhone 14 Pro Max', 1, 29990, 28990, 'https://via.placeholder.com/400?text=iPhone+14+Pro',
  '{"size":"160.7 x 77.8 x 7.85 mm","weight":"240g","cpu":"Apple A16 Bionic","memory":"6GB","storage":"128GB/256GB/512GB/1TB","display":"6.7" Super Retina XDR","camera":"48MP+12MP+12MP","battery":"3200mAh","colors":["Black","Silver","Gold","Deep Purple"]}', 18, true),

('Samsung Galaxy A54', 2, 14990, 13990, 'https://via.placeholder.com/400?text=Galaxy+A54',
  '{"size":"159.9 x 77.0 x 8.7 mm","weight":"201g","cpu":"Exynos 1280","memory":"6GB/8GB","storage":"128GB/256GB","display":"6.4" AMOLED","camera":"50MP+12MP+5MP+5MP","battery":"5000mAh","colors":["Black","White","Lime","Violet"]}', 19, true),

('Xiaomi 13', 5, 13990, 12990, 'https://via.placeholder.com/400?text=Xiaomi+13',
  '{"size":"152.8 x 71.5 x 8.2 mm","weight":"189g","cpu":"Snapdragon 8 Gen 2","memory":"8GB/12GB","storage":"256GB/512GB","display":"6.36" AMOLED","camera":"50MP+50MP+12MP","battery":"4500mAh","colors":["Black","White","Green","Purple"]}', 20, true);

-- 3. 插入評測影片資料
INSERT INTO reviews (phone_id, platform, title, url, thumbnail) VALUES
(1, 'YouTube', 'iPhone 15 Pro Max 完整評測', 'https://youtube.com', 'https://via.placeholder.com/120?text=iPhone15Pro'),
(1, 'Facebook', 'iPhone 15 Pro Max 開箱體驗', 'https://facebook.com', 'https://via.placeholder.com/120?text=iPhone15Pro'),

(2, 'YouTube', 'Samsung Galaxy S24 Ultra 評測', 'https://youtube.com', 'https://via.placeholder.com/120?text=GalaxyS24'),
(2, 'Instagram', 'Galaxy S24 Ultra 相機對比', 'https://instagram.com', 'https://via.placeholder.com/120?text=GalaxyS24'),

(3, 'YouTube', 'Google Pixel 8 Pro AI 功能展示', 'https://youtube.com', 'https://via.placeholder.com/120?text=Pixel8Pro'),
(3, 'Facebook', 'Pixel 8 Pro 拍照對比測試', 'https://facebook.com', 'https://via.placeholder.com/120?text=Pixel8Pro');

-- 完成！範例資料已導入
