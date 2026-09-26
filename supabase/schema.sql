-- Vishyx Techie — Supabase schema + RLS
-- Matches Vishyx-Techie-Admin-Panel-Spec.md §2 and §5.
-- Run this in the Supabase SQL editor (or via `supabase db push`) once
-- your project is created.

-- ============================================================
-- Tables
-- ============================================================

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text not null,
  body text,
  icon_or_image text,
  order_index int default 0,
  is_published boolean default true,
  updated_at timestamptz default now()
);

create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price text,
  billing_note text,
  features jsonb default '[]'::jsonb,
  is_recommended boolean default false,
  order_index int default 0,
  is_published boolean default true,
  updated_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  body text,
  status text default 'in_development', -- in_development | launched
  updated_at timestamptz default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  cover_image text,
  author text,
  published_at timestamptz,
  updated_at timestamptz default now(),
  is_published boolean default false,
  meta_title text,
  meta_description text
);

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  order_index int default 0,
  is_published boolean default true
);

create table if not exists site_settings (
  id int primary key default 1,
  phone text,
  email text,
  address text,
  social_links jsonb default '{}'::jsonb,
  footer_note text,
  constraint single_row check (id = 1)
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_interest text,
  message text not null,
  created_at timestamptz default now(),
  status text default 'new' -- new | replied | archived
);

create table if not exists waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  name text not null,
  email text not null,
  phone text,
  company text,
  notes text,
  created_at timestamptz default now()
);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table services enable row level security;
alter table packages enable row level security;
alter table products enable row level security;
alter table blog_posts enable row level security;
alter table faqs enable row level security;
alter table site_settings enable row level security;
alter table contact_submissions enable row level security;
alter table waitlist_submissions enable row level security;

-- Public (anon) read access — published content only
create policy "Public can read published services"
  on services for select using (is_published = true);

create policy "Public can read published packages"
  on packages for select using (is_published = true);

create policy "Public can read products"
  on products for select using (true);

create policy "Public can read published blog posts"
  on blog_posts for select using (is_published = true);

create policy "Public can read published faqs"
  on faqs for select using (is_published = true);

create policy "Public can read site settings"
  on site_settings for select using (true);

-- Public (anon) insert-only on the two form tables — no public read
create policy "Public can submit contact form"
  on contact_submissions for insert with check (true);

create policy "Public can submit waitlist form"
  on waitlist_submissions for insert with check (true);

-- Authenticated admin — full access to everything.
-- Adjust `auth.role() = 'authenticated'` to a stricter check (e.g. a
-- specific user id or a custom `is_admin` claim) if you add non-admin
-- authenticated users later.
create policy "Admin full access services"
  on services for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access packages"
  on packages for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access products"
  on products for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access blog_posts"
  on blog_posts for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access faqs"
  on faqs for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access site_settings"
  on site_settings for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access contact_submissions"
  on contact_submissions for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Admin full access waitlist_submissions"
  on waitlist_submissions for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================================
-- Seed data (optional — matches src/lib/content.js so the site
-- looks right the moment you switch from static content to Supabase)
-- ============================================================

insert into site_settings (id, phone, email)
values (1, '+91 90481 51630', 'support@vishyxtechie.in')
on conflict (id) do nothing;

insert into products (slug, name, tagline, body, status) values
  ('fomriva', 'Fomriva', 'Automate the processes that run your business.',
   'Fomriva is built to take the repetitive, manual parts of running a business off your plate — so your team spends time on customers, not admin.',
   'in_development'),
  ('billing-pos', 'Billing & POS Software', 'Billing and point-of-sale, built simple.',
   'A billing and POS system designed for how small and growing businesses actually sell — quick setup, clear reporting, nothing you don''t need.',
   'in_development')
on conflict (slug) do nothing;
