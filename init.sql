--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;


--
-- PostgreSQL database dump complete
--

--
-- Database "foodswap" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: foodswap; Type: DATABASE; Schema: -; Owner: foodswap
--

ALTER DATABASE foodswap OWNER TO foodswap;

\connect foodswap

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: sqitch; Type: SCHEMA; Schema: -; Owner: foodswap
--

CREATE SCHEMA sqitch;


ALTER SCHEMA sqitch OWNER TO foodswap;

--
-- Name: SCHEMA sqitch; Type: COMMENT; Schema: -; Owner: foodswap
--

COMMENT ON SCHEMA sqitch IS 'Sqitch database deployment metadata v1.1.';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: author; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.author (
    id integer NOT NULL,
    username character varying(200) NOT NULL,
    email character varying(200) NOT NULL,
    password character varying(200) NOT NULL,
    city text NOT NULL
);


ALTER TABLE public.author OWNER TO foodswap;

--
-- Name: author_id_seq; Type: SEQUENCE; Schema: public; Owner: foodswap
--

ALTER TABLE public.author ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.author_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: category; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.category (
    id integer NOT NULL,
    type character varying(64) NOT NULL,
    name character varying(64) NOT NULL
);


ALTER TABLE public.category OWNER TO foodswap;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: foodswap
--

ALTER TABLE public.category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: ingredient; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.ingredient (
    id integer NOT NULL,
    name character varying(64) NOT NULL
);


ALTER TABLE public.ingredient OWNER TO foodswap;

--
-- Name: ingredient_id_seq; Type: SEQUENCE; Schema: public; Owner: foodswap
--

ALTER TABLE public.ingredient ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: meal; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.meal (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    description text NOT NULL,
    created_date timestamp with time zone DEFAULT now(),
    portion integer NOT NULL,
    city character varying(200) NOT NULL,
    online boolean NOT NULL,
    author_id integer,
    picture_path text
);


ALTER TABLE public.meal OWNER TO foodswap;

--
-- Name: meal_category_associate; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.meal_category_associate (
    id_meal integer NOT NULL,
    id_category integer NOT NULL
);


ALTER TABLE public.meal_category_associate OWNER TO foodswap;

--
-- Name: meal_id_seq; Type: SEQUENCE; Schema: public; Owner: foodswap
--

ALTER TABLE public.meal ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.meal_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: meal_ingredient_associate; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.meal_ingredient_associate (
    id_meal integer NOT NULL,
    id_ingredient integer NOT NULL
);


ALTER TABLE public.meal_ingredient_associate OWNER TO foodswap;

--
-- Name: swap; Type: TABLE; Schema: public; Owner: foodswap
--

CREATE TABLE public.swap (
    id integer NOT NULL,
    status integer NOT NULL,
    date timestamp with time zone DEFAULT now(),
    requested_meal_id integer,
    offered_meal_id integer
);


ALTER TABLE public.swap OWNER TO foodswap;

--
-- Name: swap_id_seq; Type: SEQUENCE; Schema: public; Owner: foodswap
--

ALTER TABLE public.swap ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.swap_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: changes; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.changes (
    change_id text NOT NULL,
    script_hash text,
    change text NOT NULL,
    project text NOT NULL,
    note text DEFAULT ''::text NOT NULL,
    committed_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    committer_name text NOT NULL,
    committer_email text NOT NULL,
    planned_at timestamp with time zone NOT NULL,
    planner_name text NOT NULL,
    planner_email text NOT NULL
);


ALTER TABLE sqitch.changes OWNER TO foodswap;

--
-- Name: TABLE changes; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.changes IS 'Tracks the changes currently deployed to the database.';


--
-- Name: COLUMN changes.change_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.change_id IS 'Change primary key.';


--
-- Name: COLUMN changes.script_hash; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.script_hash IS 'Deploy script SHA-1 hash.';


--
-- Name: COLUMN changes.change; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.change IS 'Name of a deployed change.';


--
-- Name: COLUMN changes.project; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.project IS 'Name of the Sqitch project to which the change belongs.';


--
-- Name: COLUMN changes.note; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.note IS 'Description of the change.';


--
-- Name: COLUMN changes.committed_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.committed_at IS 'Date the change was deployed.';


--
-- Name: COLUMN changes.committer_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.committer_name IS 'Name of the user who deployed the change.';


--
-- Name: COLUMN changes.committer_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.committer_email IS 'Email address of the user who deployed the change.';


--
-- Name: COLUMN changes.planned_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.planned_at IS 'Date the change was added to the plan.';


--
-- Name: COLUMN changes.planner_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.planner_name IS 'Name of the user who planed the change.';


--
-- Name: COLUMN changes.planner_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.changes.planner_email IS 'Email address of the user who planned the change.';


--
-- Name: dependencies; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.dependencies (
    change_id text NOT NULL,
    type text NOT NULL,
    dependency text NOT NULL,
    dependency_id text,
    CONSTRAINT dependencies_check CHECK ((((type = 'require'::text) AND (dependency_id IS NOT NULL)) OR ((type = 'conflict'::text) AND (dependency_id IS NULL))))
);


ALTER TABLE sqitch.dependencies OWNER TO foodswap;

--
-- Name: TABLE dependencies; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.dependencies IS 'Tracks the currently satisfied dependencies.';


--
-- Name: COLUMN dependencies.change_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.dependencies.change_id IS 'ID of the depending change.';


--
-- Name: COLUMN dependencies.type; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.dependencies.type IS 'Type of dependency.';


--
-- Name: COLUMN dependencies.dependency; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.dependencies.dependency IS 'Dependency name.';


--
-- Name: COLUMN dependencies.dependency_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.dependencies.dependency_id IS 'Change ID the dependency resolves to.';


--
-- Name: events; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.events (
    event text NOT NULL,
    change_id text NOT NULL,
    change text NOT NULL,
    project text NOT NULL,
    note text DEFAULT ''::text NOT NULL,
    requires text[] DEFAULT '{}'::text[] NOT NULL,
    conflicts text[] DEFAULT '{}'::text[] NOT NULL,
    tags text[] DEFAULT '{}'::text[] NOT NULL,
    committed_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    committer_name text NOT NULL,
    committer_email text NOT NULL,
    planned_at timestamp with time zone NOT NULL,
    planner_name text NOT NULL,
    planner_email text NOT NULL,
    CONSTRAINT events_event_check CHECK ((event = ANY (ARRAY['deploy'::text, 'revert'::text, 'fail'::text, 'merge'::text])))
);


ALTER TABLE sqitch.events OWNER TO foodswap;

--
-- Name: TABLE events; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.events IS 'Contains full history of all deployment events.';


--
-- Name: COLUMN events.event; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.event IS 'Type of event.';


--
-- Name: COLUMN events.change_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.change_id IS 'Change ID.';


--
-- Name: COLUMN events.change; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.change IS 'Change name.';


--
-- Name: COLUMN events.project; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.project IS 'Name of the Sqitch project to which the change belongs.';


--
-- Name: COLUMN events.note; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.note IS 'Description of the change.';


--
-- Name: COLUMN events.requires; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.requires IS 'Array of the names of required changes.';


--
-- Name: COLUMN events.conflicts; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.conflicts IS 'Array of the names of conflicting changes.';


--
-- Name: COLUMN events.tags; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.tags IS 'Tags associated with the change.';


--
-- Name: COLUMN events.committed_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.committed_at IS 'Date the event was committed.';


--
-- Name: COLUMN events.committer_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.committer_name IS 'Name of the user who committed the event.';


--
-- Name: COLUMN events.committer_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.committer_email IS 'Email address of the user who committed the event.';


--
-- Name: COLUMN events.planned_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.planned_at IS 'Date the event was added to the plan.';


--
-- Name: COLUMN events.planner_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.planner_name IS 'Name of the user who planed the change.';


--
-- Name: COLUMN events.planner_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.events.planner_email IS 'Email address of the user who plan planned the change.';


--
-- Name: projects; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.projects (
    project text NOT NULL,
    uri text,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    creator_name text NOT NULL,
    creator_email text NOT NULL
);


ALTER TABLE sqitch.projects OWNER TO foodswap;

--
-- Name: TABLE projects; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.projects IS 'Sqitch projects deployed to this database.';


--
-- Name: COLUMN projects.project; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.projects.project IS 'Unique Name of a project.';


--
-- Name: COLUMN projects.uri; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.projects.uri IS 'Optional project URI';


--
-- Name: COLUMN projects.created_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.projects.created_at IS 'Date the project was added to the database.';


--
-- Name: COLUMN projects.creator_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.projects.creator_name IS 'Name of the user who added the project.';


--
-- Name: COLUMN projects.creator_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.projects.creator_email IS 'Email address of the user who added the project.';


--
-- Name: releases; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.releases (
    version real NOT NULL,
    installed_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    installer_name text NOT NULL,
    installer_email text NOT NULL
);


ALTER TABLE sqitch.releases OWNER TO foodswap;

--
-- Name: TABLE releases; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.releases IS 'Sqitch registry releases.';


--
-- Name: COLUMN releases.version; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.releases.version IS 'Version of the Sqitch registry.';


--
-- Name: COLUMN releases.installed_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.releases.installed_at IS 'Date the registry release was installed.';


--
-- Name: COLUMN releases.installer_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.releases.installer_name IS 'Name of the user who installed the registry release.';


--
-- Name: COLUMN releases.installer_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.releases.installer_email IS 'Email address of the user who installed the registry release.';


--
-- Name: tags; Type: TABLE; Schema: sqitch; Owner: foodswap
--

CREATE TABLE sqitch.tags (
    tag_id text NOT NULL,
    tag text NOT NULL,
    project text NOT NULL,
    change_id text NOT NULL,
    note text DEFAULT ''::text NOT NULL,
    committed_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    committer_name text NOT NULL,
    committer_email text NOT NULL,
    planned_at timestamp with time zone NOT NULL,
    planner_name text NOT NULL,
    planner_email text NOT NULL
);


ALTER TABLE sqitch.tags OWNER TO foodswap;

--
-- Name: TABLE tags; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON TABLE sqitch.tags IS 'Tracks the tags currently applied to the database.';


--
-- Name: COLUMN tags.tag_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.tag_id IS 'Tag primary key.';


--
-- Name: COLUMN tags.tag; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.tag IS 'Project-unique tag name.';


--
-- Name: COLUMN tags.project; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.project IS 'Name of the Sqitch project to which the tag belongs.';


--
-- Name: COLUMN tags.change_id; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.change_id IS 'ID of last change deployed before the tag was applied.';


--
-- Name: COLUMN tags.note; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.note IS 'Description of the tag.';


--
-- Name: COLUMN tags.committed_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.committed_at IS 'Date the tag was applied to the database.';


--
-- Name: COLUMN tags.committer_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.committer_name IS 'Name of the user who applied the tag.';


--
-- Name: COLUMN tags.committer_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.committer_email IS 'Email address of the user who applied the tag.';


--
-- Name: COLUMN tags.planned_at; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.planned_at IS 'Date the tag was added to the plan.';


--
-- Name: COLUMN tags.planner_name; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.planner_name IS 'Name of the user who planed the tag.';


--
-- Name: COLUMN tags.planner_email; Type: COMMENT; Schema: sqitch; Owner: foodswap
--

COMMENT ON COLUMN sqitch.tags.planner_email IS 'Email address of the user who planned the tag.';


--
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.author (id, username, email, password, city) FROM stdin;
3	marie	marie@mail.fr	$2b$10$2IJaCTfnrGcx/Uq83L76H.qii8dAHWyGXyQAUxV8LUjfT1nGG5yfu	paris
4	coco	coco@mail.com	$2b$10$vPFTYGpha96EeNu/yJ2jrOKKOO/uU4ppFXEvA0j5ji/x6aShV.YJy	paris
5	louis	louis@mail.com	$2b$10$M6T1Te2syIR6HCcVmODMjOEOhYgQ3t2h9xvQ1Oxgx6nUBQbRqolIa	Nice
6	rodolphe	rodolphe@mail.fr	$2b$10$5qozAXOr/.ahh9Pt9K2FguX2Dp2XWN8nqS/wxb2M9T3q29h/mfFCu	Paris
7	lola	lola@mail.fr	$2b$10$9VJnbiK4XqZfj7pbcdg5WuYwSga70ws0bfvRBAp4DltnYM.jW59UW	paris
8	alice	alice@mail.com	$2b$10$eD/a1QDQ6PM8Mpdgm6FolO2hI/BpkGlmf5SZxF3rElhj7oekkiw7q	paris
9	sophie	sophie@mail.fr	$2b$10$XXc2sIbwTQ7/50G93mjeX.QknH1MR.QutR07C8C0q.vD6TP4/u5My	paris
10	giovanni	giovanni@mail.fr	$2b$10$Fu9mY06JFBNkIUHetprOEe6w1rVH3KwFljiozb9c1K.pf08ansf5C	paris
11	steph	steph@mail.fr	$2b$10$xfXDveLY2k8BEmCc5BgNPef4l7IzabfGgAL5oqYP/UsAgMOO0UxDi	paris
12	paul	paul@mail.com	$2b$10$OpZX/ORvp.PFFFsU4zysseIYUCku4AYSbS3VaN/8gTaPEkEJ1uVAS	paris
13	marc	marc@mail.fr	$2b$10$/1tBMj0EnZtUxUj4HJ.6hOTsDpH0PdI9iasQ/D0u0ZA5fiTVVpFIS	paris
\.


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.category (id, type, name) FROM stdin;
26	kitchen	Indien
4	kitchen	Européenne
1	dish	Entrée
2	dish	Plat
3	dish	Dessert
5	kitchen	Asiatique
11	kitchen	Africaine
8	kitchen	Américaine
27	kitchen	Antillaise
23	kitchen	Chinoise
29	kitchen	Française
10	kitchen	Coréenne
18	kitchen	Indienne
17	kitchen	Italienne
21	kitchen	Japonaise
24	kitchen	Marocaine
25	kitchen	Méditerranéenne
28	kitchen	Mexicaine
20	kitchen	Orientale
19	kitchen	Thaïlandaise
15	kitchen	Vietnamienne
30	kitchen	Londonienne
31	kitchen	Portugaise
32	kitchen	Espagnole
22	kitchen	Turques
33	kitchen	Océanienne
\.


--
-- Data for Name: ingredient; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.ingredient (id, name) FROM stdin;
1	Sel
2	Poivre
3	Huile
4	Pommes de terre
5	Graisse de canard
6	Oeufs
7	Farine
8	Riz
9	Pâtes
10	Sucre
11	Beurre
12	Lait
14	Vinaigre
15	Thon
16	Viande hachée
17	Carotte
18	Epinard
19	Jambon
20	Ail
21	Oignons
22	Echalotte
23	Fromage
25	Tomates
26	Moutarde
27	Levure
28	Citron
29	Crème fraîche
30	Bouillon
31	Fruits secs
32	Yaourt
33	Epices
34	Fines herbes
35	Miel
36	Boeuf
37	Poisson
38	Algues
39	Volaille
42	Salade
43	Curry
44	Poulet
45	Saumon
46	Porc
47	Veau
48	Crevettes
49	Fruits de mer
50	Moules
51	Calamar
52	Cabillaud
53	Lieu noir
54	Dinde
55	Courgette
56	Poivron
57	Aubergine
58	Chou rouge
59	Chou blanc
60	Chou-fleur
61	Betterave
62	Brocolis
63	Endive
64	Haricot
65	Poireau
66	Avocat
67	Petit pois
68	Persil
69	Basilic
70	Cerfeuil
71	Ciboulette
72	Estragon
73	Menthe
74	Aneth
75	Anis
76	Coriandre
77	Thym
78	Laurier
79	Piment
80	Ketchup
81	Soja
82	Cannelle
83	Curcuma
84	Muscade
85	Vanille
86	Paprika
87	Gingembre
88	Cornichons
89	Nuoc-mâm
90	Sauce huitre
91	Piment doux
40	Chocolat noir
92	Chocolat blanc
93	Chocolat au lait
94	Fraises
95	Framboise
96	Cocktail de fruits
97	Banane
98	Poire
99	Pomme
100	Abricot
101	Raisin
102	Pêches
103	Myrtilles
104	Raisins secs
105	Cerise
106	Amande
107	Noisette
108	Noix
109	Pistaches
110	Cacahuètes
111	Fécule de maïs
112	Fécule de pomme de terre
113	Sucre glace
114	Sucre roux
115	Vermicelle
116	Nouilles
117	Feuilles de briques
118	Pâte feuilletée
119	Pâte brisée
120	Crème liquide
121	Vin blanc
24	Vin rouge
122	Saké
123	Rhum
124	Porto
125	Calvados
126	Armagnac
127	Cointreau
128	Bière
129	Mascarpone
130	Fromage Râpé
131	Emmental
132	Mozzarella
133	Chèvre
134	Comté
135	Fromage bleu
136	Camembert
137	Lardons
138	Gorgonzola
139	Reblochon
140	Saucisses
141	Chorizo
142	Merguez
143	Bacon
144	Steack
145	Pain burger
146	Baguette
147	Galette
148	Champignons de Paris
149	Champignons noir
151	Cèpe
150	Shiitake
152	Girolle
153	Olives noires
41	Olives vertes
154	Lait de coco
13	Huile d'olive
155	Huile de sésame
156	Graines de sésame
157	Feuilles d'algues
158	Tofu
159	Sauce soja
160	Vinaigre de riz
162	Semoule
164	Pâte à ravioli
165	Celeri
166	Ganache montée
167	Concombre
168	Mayonnaise
\.


--
-- Data for Name: meal; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.meal (id, name, description, created_date, portion, city, online, author_id, picture_path) FROM stdin;
29	tartare de saumon	saumon cru	2021-03-21 15:49:31.39882+00	1	paris	t	4	1616341771254.jpg
30	œufs mimosa et concombre à la crème	œuf mimosa avec sa mayonnaise et ses concombres à la crème	2021-03-21 16:12:27.105717+00	2	paris	t	5	1616343147022.jpg
13	number cake	part de gâteau qui contient une ganache monté au chocolat blanc, des fraises et de la crème chantilly 	2021-03-21 14:31:08.512436+00	4	paris	f	8	1616337068421.jpg
31	gyoza au porc	raviolis fait maison	2021-03-21 17:03:13.489139+00	2	paris	t	8	1616346193464.jpg
32	rouler au saumon	jolie rouler au saumon	2021-03-21 18:41:30.539909+00	2	paris	f	6	1616352089559.jpg
22	risotto aux fruits de mer	fruits de mer sur une basse de riz a la crème	2021-03-21 15:24:47.148325+00	1	paris	t	4	1616340287152.jpg
28	Pâtes carbonara	Pâtes carbonara avec oeuf coulant	2021-03-21 15:45:24.53317+00	1	paris	t	11	1616341523850.jpg
33	quiche aux légumes	une jolie quiche	2021-03-22 16:37:32.531891+00	2	paris	t	7	1616431051769.jpg
12	Pizza 	Pizza aux 4 fromages et basilic	2021-03-21 14:28:51.349135+00	8	Paris	f	7	1616336929554.jpg
3	Cassolette de la mer	Poissons et fruits de mer à la crème fraîche	2021-03-21 14:04:38.821835+00	2	Paris	f	4	1616335472406.jpg
4	Sushi	Assortiment de sushi faits maison	2021-03-21 14:06:30.567102+00	2	Paris	t	3	1616335588394.jpg
5	Saumon grillé	Saumon grillé et petits légumes du soleil	2021-03-21 14:09:42.984639+00	1	Paris	t	3	1616335778834.jpg
6	Cookie chocolat	Des bons petits cookies au chocolat	2021-03-21 14:11:10.099527+00	5	Paris	t	3	1616335866150.jpg
7	Burger boeuf	Burger boeuf et frites maison	2021-03-21 14:15:24.592161+00	1	Paris	t	6	1616336124072.jpg
11	Gateau triple chocolat	Part de gâteau triple chocolat 	2021-03-21 14:23:27.527926+00	1	Paris	t	7	1616336606713.jpg
14	Lasagnes	La recette de ma grand mère 	2021-03-21 14:31:53.143342+00	2	Paris	t	7	1616337110205.jpg
15	Spaghetti aux crevettes	Crevettes sautées et petits légumes	2021-03-21 14:41:13.883937+00	1	Paris	t	9	1616337669356.jpg
16	Soupe Thaï au curry rouge	Soupe Thaï au lait de coco et curry rouge. Elle contient des nouilles, des raviolis frits au porc, des crevettes et des champignons shiitake	2021-03-21 14:45:25.5597+00	1	paris	t	8	1616337925546.jpg
17	Nouilles sautées au poulet	Plat épicé ! 	2021-03-21 14:45:26.366665+00	1	Paris	t	9	1616337925584.jpg
18	Curry thai	Un curry végétarien au lait de coco	2021-03-21 14:49:01.243148+00	2	paris	t	9	1616338140016.jpg
19	raviolis vapeur au porc	raviolis au porc fait maison	2021-03-21 14:52:03.755723+00	2	paris	t	4	1616338323738.jpg
20	Brochettes de poulet teriyaki 	Deux brochettes avec du riz	2021-03-21 14:52:31.734658+00	1	paris	t	10	1616338350496.jpg
1	Couscous 	Couscous à la merguez	2021-03-21 08:55:41.777988+00	2	Paris	t	4	1616318049356.jpg
21	Burger italien	Burger à l'italienne	2021-03-21 15:14:01.463847+00	1	Paris	t	10	1616339640119.jpg
10	bibimbap	Sur une base de riz on retrouve du bœuf hachée accompagné de ses légumes	2021-03-21 14:20:27.547235+00	2	paris	t	5	1616336427472.jpg
9	Brownie	Brownie au chocolat et pâte à tartiner	2021-03-21 14:18:44.414701+00	3	Paris	t	6	1616336323688.jpg
23	nems au porc	nems croustillant fait maison	2021-03-21 15:28:07.637254+00	2	paris	t	8	1616340487683.jpg
24	Tartelette aux fraises	Petite tartelette à la fraise	2021-03-21 15:29:21.70611+00	1	paris	t	11	1616340560011.jpg
25	riz cantonais	Un bon riz sauté asiatique	2021-03-21 15:32:37.953495+00	2	paris	t	5	1616340757967.jpg
8	buddha bowl	Sur une base de riz on retrouve du saumon accompagné de ses légumes	2021-03-21 14:16:27.57632+00	1	paris	t	5	1616336187554.jpg
26	Crêpes à la cannelle	Des crêpes à la cannelle 	2021-03-21 15:37:41.273634+00	5	paris	t	11	1616341060226.jpg
27	sushi	Sur une feuille d'algue roulé, saumon ou thon, avocat, concombre et riz	2021-03-21 15:45:05.813682+00	2	paris	t	5	1616341505813.jpg
\.


--
-- Data for Name: meal_category_associate; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.meal_category_associate (id_meal, id_category) FROM stdin;
3	29
3	2
4	21
4	2
5	25
5	2
6	4
6	3
7	8
7	2
11	4
11	3
14	17
14	2
15	17
15	2
16	19
16	2
17	5
17	2
18	19
18	2
19	5
19	2
20	5
20	2
1	20
1	2
21	17
21	2
10	10
10	2
9	4
9	3
23	5
23	2
24	4
24	3
25	5
25	2
8	33
8	2
26	4
26	3
27	5
27	2
29	4
29	1
30	4
30	1
13	4
13	3
31	21
31	1
32	4
32	1
22	17
22	2
28	17
28	2
33	4
33	2
12	17
12	2
\.


--
-- Data for Name: meal_ingredient_associate; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.meal_ingredient_associate (id_meal, id_ingredient) FROM stdin;
9	6
9	7
9	10
9	12
9	93
23	16
23	46
23	115
23	149
23	17
23	21
23	81
23	112
24	94
24	29
24	10
25	8
25	67
25	19
25	137
25	6
25	21
25	155
8	17
8	28
8	45
8	58
8	66
8	71
8	155
8	156
8	159
8	8
26	6
26	12
26	10
26	7
26	82
27	8
27	45
27	15
3	45
3	53
3	55
3	25
3	87
3	21
3	20
3	48
27	160
27	157
27	10
3	29
3	121
3	74
3	159
3	65
3	1
3	13
3	90
4	45
4	8
4	159
5	45
5	56
5	25
6	40
6	10
6	7
6	6
6	12
7	36
7	145
7	156
7	23
27	66
27	167
29	45
29	13
29	109
30	6
30	167
30	168
30	29
30	71
30	1
13	1
13	7
11	40
11	92
11	93
11	6
11	12
14	25
14	36
14	69
14	130
15	9
15	48
15	56
16	154
16	43
16	48
16	150
16	21
16	116
16	46
16	90
16	159
16	89
17	116
17	44
17	56
17	79
18	43
18	154
18	4
18	17
19	16
19	46
19	71
19	112
19	21
19	1
19	2
20	44
20	56
20	8
20	159
13	92
13	94
13	120
31	46
31	164
1	25
1	56
1	76
1	142
1	13
1	162
21	36
21	145
21	23
21	143
10	6
10	8
10	16
10	17
10	18
10	21
10	36
32	23
32	45
22	8
22	20
22	21
22	25
22	29
22	49
22	74
28	6
28	9
28	137
33	119
33	65
12	23
12	25
12	69
12	119
\.


--
-- Data for Name: swap; Type: TABLE DATA; Schema: public; Owner: foodswap
--

COPY public.swap (id, status, date, requested_meal_id, offered_meal_id) FROM stdin;
1	0	2021-03-21 14:19:58.948+00	5	9
4	0	2021-03-21 16:05:31.663+00	25	14
3	1	2021-03-21 16:04:34.368+00	27	11
2	2	2021-03-21 15:15:35.433+00	14	21
6	1	2021-03-21 16:09:56.15+00	12	9
5	1	2021-03-21 16:09:01.238+00	26	9
7	1	2021-03-21 16:12:22.328+00	21	28
8	1	2021-03-21 16:13:02.179+00	17	24
9	0	2021-03-21 16:15:23.688+00	5	15
10	2	2021-03-21 16:34:58.483+00	28	16
11	0	2021-03-21 16:43:31.58+00	23	4
12	1	2021-03-21 17:04:53.109+00	22	31
13	1	2021-03-21 18:42:37.849+00	31	7
14	1	2021-03-22 14:20:41.359+00	27	16
15	1	2021-03-22 16:38:48.125+00	24	33
16	0	2021-03-22 18:30:52.191+00	30	11
17	0	2021-03-22 18:33:10.823+00	33	11
\.


--
-- Data for Name: changes; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.changes (change_id, script_hash, change, project, note, committed_at, committer_name, committer_email, planned_at, planner_name, planner_email) FROM stdin;
35ec62147ec1a12edd28228cd596b49f6cd823d1	08a5bbe3b7b8c5b0ce1f912131a09cdf291f2899	v1_init	foodswap	creation v1 database	2021-03-20 17:13:11.938991+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-02 13:24:15+00	florian martin	martinflorian2@gmail.com
8b57ac8776bab7a1536cc2241fa71a32e7aaa9d6	847214e181adf01a7fcf0bb54e5aa44d0db9a6bf	v1_updateName	foodswap	update name of table author and column pseudonym/address	2021-03-20 17:13:11.968027+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-03 16:50:00+00	Edouard Laffont	edouard.laffont@live.com
70c5fa42c51468e9f0a9f60a630e370dd6feb666	5363cdca54f6895c29027b7551e407f54377227f	v1_updateTableMeal	foodswap	new column picture_path in table Meal	2021-03-20 17:13:11.995341+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 08:15:19+00	Edouard Laffont	edouard.laffont@live.com
6c240775f4b58b9f83abc6330d44e33d1e1f9b2a	08530b2f72f5f7433f81f00d76b17cd292851ef0	v1_updateTableAssociate	foodswap	drop tables associate and create them with PK	2021-03-20 17:13:12.031361+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 09:41:20+00	Edouard Laffont	edouard.laffont@live.com
e99ac944294f417710de656629f0e0721247a228	fa3fc079b5265b55d9db89a1fc6130913f935e08	v1_uploadData	foodswap	upload fake data -category- in database	2021-03-20 17:13:12.059137+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 19:45:12+00	Edouard Laffont	edouard.laffont@live.com
16215c789727c9a04f4ace4fb559a478fcc78a83	72af71a2fb269fdc4949f509a7a0bc4b241e3239	v1_uploadDataIngredient	foodswap	upload ingredient data	2021-03-20 17:13:12.086976+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-11 12:26:53+00	Edouard Laffont	edouard.laffont@live.com
a69025225c47bc6e642d6836f08966a375f2e149	f9c46d9b16b7c99316bef18f442bbe5dc0b41832	v1_uploadDataCategories	foodswap	add categories in database	2021-03-20 17:13:12.114612+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-11 20:05:38+00	Edouard Laffont	edouard.laffont@live.com
820ae866327eab7d51deb66619819d74b2dcef54	adf189c4b1d3fb7d55c30b54be8555b353752508	v1_uploadDataIngredient2	foodswap	upload more ingredient in database	2021-03-20 17:13:12.141048+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-12 08:37:46+00	Edouard Laffont	edouard.laffont@live.com
\.


--
-- Data for Name: dependencies; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.dependencies (change_id, type, dependency, dependency_id) FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.events (event, change_id, change, project, note, requires, conflicts, tags, committed_at, committer_name, committer_email, planned_at, planner_name, planner_email) FROM stdin;
deploy	35ec62147ec1a12edd28228cd596b49f6cd823d1	v1_init	foodswap	creation v1 database	{}	{}	{}	2021-03-20 17:13:11.941174+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-02 13:24:15+00	florian martin	martinflorian2@gmail.com
deploy	8b57ac8776bab7a1536cc2241fa71a32e7aaa9d6	v1_updateName	foodswap	update name of table author and column pseudonym/address	{}	{}	{}	2021-03-20 17:13:11.969691+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-03 16:50:00+00	Edouard Laffont	edouard.laffont@live.com
deploy	70c5fa42c51468e9f0a9f60a630e370dd6feb666	v1_updateTableMeal	foodswap	new column picture_path in table Meal	{}	{}	{}	2021-03-20 17:13:11.996987+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 08:15:19+00	Edouard Laffont	edouard.laffont@live.com
deploy	6c240775f4b58b9f83abc6330d44e33d1e1f9b2a	v1_updateTableAssociate	foodswap	drop tables associate and create them with PK	{}	{}	{}	2021-03-20 17:13:12.033111+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 09:41:20+00	Edouard Laffont	edouard.laffont@live.com
deploy	e99ac944294f417710de656629f0e0721247a228	v1_uploadData	foodswap	upload fake data -category- in database	{}	{}	{}	2021-03-20 17:13:12.060737+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-10 19:45:12+00	Edouard Laffont	edouard.laffont@live.com
deploy	16215c789727c9a04f4ace4fb559a478fcc78a83	v1_uploadDataIngredient	foodswap	upload ingredient data	{}	{}	{}	2021-03-20 17:13:12.088876+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-11 12:26:53+00	Edouard Laffont	edouard.laffont@live.com
deploy	a69025225c47bc6e642d6836f08966a375f2e149	v1_uploadDataCategories	foodswap	add categories in database	{}	{}	{}	2021-03-20 17:13:12.116081+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-11 20:05:38+00	Edouard Laffont	edouard.laffont@live.com
deploy	820ae866327eab7d51deb66619819d74b2dcef54	v1_uploadDataIngredient2	foodswap	upload more ingredient in database	{}	{}	{}	2021-03-20 17:13:12.142648+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local	2021-03-12 08:37:46+00	Edouard Laffont	edouard.laffont@live.com
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.projects (project, uri, created_at, creator_name, creator_email) FROM stdin;
foodswap	\N	2021-03-20 17:13:11.876725+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local
\.


--
-- Data for Name: releases; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.releases (version, installed_at, installer_name, installer_email) FROM stdin;
1.1	2021-03-20 17:13:11.87262+00	Julien Moulin	sensei@MacBook-Pro-de-Julien.local
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: sqitch; Owner: foodswap
--

COPY sqitch.tags (tag_id, tag, project, change_id, note, committed_at, committer_name, committer_email, planned_at, planner_name, planner_email) FROM stdin;
\.


--
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: foodswap
--

SELECT pg_catalog.setval('public.author_id_seq', 13, true);


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: foodswap
--

SELECT pg_catalog.setval('public.category_id_seq', 33, true);


--
-- Name: ingredient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: foodswap
--

SELECT pg_catalog.setval('public.ingredient_id_seq', 168, true);


--
-- Name: meal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: foodswap
--

SELECT pg_catalog.setval('public.meal_id_seq', 33, true);


--
-- Name: swap_id_seq; Type: SEQUENCE SET; Schema: public; Owner: foodswap
--

SELECT pg_catalog.setval('public.swap_id_seq', 17, true);


--
-- Name: author author_email_key; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_email_key UNIQUE (email);


--
-- Name: author author_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);


--
-- Name: author author_pseudonym_key; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pseudonym_key UNIQUE (username);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: ingredient ingredient_name_key; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.ingredient
    ADD CONSTRAINT ingredient_name_key UNIQUE (name);


--
-- Name: ingredient ingredient_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.ingredient
    ADD CONSTRAINT ingredient_pkey PRIMARY KEY (id);


--
-- Name: meal_category_associate meal_category_associate_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_category_associate
    ADD CONSTRAINT meal_category_associate_pkey PRIMARY KEY (id_meal, id_category);


--
-- Name: meal_ingredient_associate meal_ingredient_associate_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_ingredient_associate
    ADD CONSTRAINT meal_ingredient_associate_pkey PRIMARY KEY (id_meal, id_ingredient);


--
-- Name: meal meal_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal
    ADD CONSTRAINT meal_pkey PRIMARY KEY (id);


--
-- Name: swap swap_pkey; Type: CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.swap
    ADD CONSTRAINT swap_pkey PRIMARY KEY (id);


--
-- Name: changes changes_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.changes
    ADD CONSTRAINT changes_pkey PRIMARY KEY (change_id);


--
-- Name: changes changes_project_script_hash_key; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.changes
    ADD CONSTRAINT changes_project_script_hash_key UNIQUE (project, script_hash);


--
-- Name: dependencies dependencies_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.dependencies
    ADD CONSTRAINT dependencies_pkey PRIMARY KEY (change_id, dependency);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (change_id, committed_at);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (project);


--
-- Name: projects projects_uri_key; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.projects
    ADD CONSTRAINT projects_uri_key UNIQUE (uri);


--
-- Name: releases releases_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.releases
    ADD CONSTRAINT releases_pkey PRIMARY KEY (version);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (tag_id);


--
-- Name: tags tags_project_tag_key; Type: CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.tags
    ADD CONSTRAINT tags_project_tag_key UNIQUE (project, tag);


--
-- Name: meal meal_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal
    ADD CONSTRAINT meal_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.author(id);


--
-- Name: meal_category_associate meal_category_associate_id_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_category_associate
    ADD CONSTRAINT meal_category_associate_id_category_fkey FOREIGN KEY (id_category) REFERENCES public.category(id);


--
-- Name: meal_category_associate meal_category_associate_id_meal_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_category_associate
    ADD CONSTRAINT meal_category_associate_id_meal_fkey FOREIGN KEY (id_meal) REFERENCES public.meal(id);


--
-- Name: meal_ingredient_associate meal_ingredient_associate_id_ingredient_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_ingredient_associate
    ADD CONSTRAINT meal_ingredient_associate_id_ingredient_fkey FOREIGN KEY (id_ingredient) REFERENCES public.ingredient(id);


--
-- Name: meal_ingredient_associate meal_ingredient_associate_id_meal_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.meal_ingredient_associate
    ADD CONSTRAINT meal_ingredient_associate_id_meal_fkey FOREIGN KEY (id_meal) REFERENCES public.meal(id);


--
-- Name: swap swap_offered_meal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.swap
    ADD CONSTRAINT swap_offered_meal_id_fkey FOREIGN KEY (offered_meal_id) REFERENCES public.meal(id);


--
-- Name: swap swap_requested_meal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: foodswap
--

ALTER TABLE ONLY public.swap
    ADD CONSTRAINT swap_requested_meal_id_fkey FOREIGN KEY (requested_meal_id) REFERENCES public.meal(id);


--
-- Name: changes changes_project_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.changes
    ADD CONSTRAINT changes_project_fkey FOREIGN KEY (project) REFERENCES sqitch.projects(project) ON UPDATE CASCADE;


--
-- Name: dependencies dependencies_change_id_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.dependencies
    ADD CONSTRAINT dependencies_change_id_fkey FOREIGN KEY (change_id) REFERENCES sqitch.changes(change_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dependencies dependencies_dependency_id_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.dependencies
    ADD CONSTRAINT dependencies_dependency_id_fkey FOREIGN KEY (dependency_id) REFERENCES sqitch.changes(change_id) ON UPDATE CASCADE;


--
-- Name: events events_project_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.events
    ADD CONSTRAINT events_project_fkey FOREIGN KEY (project) REFERENCES sqitch.projects(project) ON UPDATE CASCADE;


--
-- Name: tags tags_change_id_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.tags
    ADD CONSTRAINT tags_change_id_fkey FOREIGN KEY (change_id) REFERENCES sqitch.changes(change_id) ON UPDATE CASCADE;


--
-- Name: tags tags_project_fkey; Type: FK CONSTRAINT; Schema: sqitch; Owner: foodswap
--

ALTER TABLE ONLY sqitch.tags
    ADD CONSTRAINT tags_project_fkey FOREIGN KEY (project) REFERENCES sqitch.projects(project) ON UPDATE CASCADE;

