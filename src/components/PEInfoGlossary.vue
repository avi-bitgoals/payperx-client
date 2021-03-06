<template>
  <div>
    <section class="faq_pnl">
      <div class="container">
        <h2>THE KEY TERMS AND <br>THEIR DEFINITIONS</h2>
        <p>If you need additional support,
          <router-link :to="{ name: 'PE-ContactUs'}">Contact us</router-link>
         <br>directly for answers.</p>
        <div class="glossary_pnl">
          <ul>
            <li><a href="#a-b">A-B</a></li>
            <li><a href="#c-d">C-D</a></li>
            <li><a href="#e-f">E-F</a></li>
            <li><a href="#g-h">G-H</a></li>
            <li><a href="#i-l">I-L</a></li>
            <li><a href="#m-n">M-N</a></li>
            <li><a href="#o-q">O-Q</a></li>
            <li><a href="#r-s">R-S</a></li>
            <li><a href="#t-z">T-Z</a></li>
          </ul>
          <a href="#" class="block_btn">BLOCKCHAIN GLOSSARY</a>
          <div class="clearfix"></div>
        </div>
        <div class="glossary_bottm">
          <section id="a-b">
            <h3>Address</h3>
            <p>A secure identifier marked by a unique string of characters that
              enables payments to an individual or entity via blockchain
              transactions. It usually requires a private key to exclusively
              access the funds. For example, Bitcoin addresses are alphanumeric
              strings that begin with a 1 or 3; Ether addresses begin with ‘0x’.
            </p>
            <h3>Altcoin</h3>
            <p>A cryptocurrency or a category of cryptocurrencies that are an
              alternative to bitcoin. Many altcoins project themselves as better
              alternatives to bitcoin in various ways (e.g. more efficient, less
              expensive, etc.).
            </p>
            <h3>ASIC</h3>
            <p>Short form for ‘Application Specific Integrated Circuit’. Often
              compared to GPUs, ASICs are specially made for mining and may
              offer significant power savings.
            </p>
            <h3>Bitcoin (BTC)</h3>
            <p>A type of cryptocurrency created by Satoshi Nakamoto in 2009. It
              was one of the first digital currencies that enabled instant P2P
              payments. Bitcoins are created through a process known as bitcoin
              mining that requires a massive amount of computing power.
            </p>
            <h3>Bitcoin Cash (BCH)</h3>
            <p>A type of cryptocurrency that was created in August 2017 and is
              essentially a clone of the Bitcoin blockchain but has increased
              block size capacity (from 1 MB to 8 MB) as a way to solve the
              scaling problem.
            </p>
            <h3>Block</h3>
            <p>Refers to a collection of data related to transactions that are
              bundled together with a predetermined size and are processed for
              transaction verification and eventually becomes part of a
              blockchain.
            </p>
            <h3>Blockchain</h3>
            <p>A decentralized, digital ledger where transactions made in
              Bitcoin or other cryptocurrencies are recorded chronologically and
              publicly. The block contains information that, once it goes into
              the blockchain, it becomes part of the permanent and immutable
              database, connecting to other blocks in the blockchain like the
              links in a chain.
            </p>
            <h3>Block Explorer</h3>
            <p>Block explorer is an online tool to view all transactions, past
              and current, on the blockchain. They provide useful information
              such as network hash rate and transaction growth.
            </p>
            <h3>Block Height</h3>
            <p>The number of blocks connected on the blockchain.
            </p>
            <h3>Block Reward</h3>
            <p>A form of incentive for the miner who successfully calculated the
              hash in a block during mining. Verification of transactions on the
              blockchain generates new coins in the process, and the miner is
              rewarded a portion of those.
            </p>
          </section>
          <section id="c-d">
            <h3>Central Ledger</h3>
            <p>A ledger maintained by a central agency.
            </p>
            <h3>Confirmation</h3>
            <p>The successful act of hashing a transaction and adding it to the
              blockchain.
            </p>
            <h3>Consensus</h3>
            <p>Consensus is achieved when all participants of the network agree
              on the validity of the transactions, ensuring that the ledgers are
              exact copies of each other.</p>
            <h3>Cryptocurrency</h3>
            <p>A type of digital currency that is generally decentralized and
              uses cryptography (i.e. data is converted into a format that is
              unreadable for unauthorized users) for added security, making it
              difficult to counterfeit or manipulate.<br>
              Also known as tokens.</p>
            <h3>Cryptographic Hash Function</h3>
            <p>Cryptographic hashes produce a fixed-size and unique hash value
              from variable-size transaction input. The SHA-256 computational
              algorithm is an example of a cryptographic hash.</p>
            <h3>Dapp</h3>
            <p>A decentralized application (Dapp) is an application that is open
              source, operates autonomously, has its data stored on a
              blockchain, incentivized in the form of cryptographic tokens and
              operates on a protocol that shows proof of value.</p>
            <h3>DAO</h3>
            <p>
              Decentralized Autonomous Organizations can be thought of as
              corporations that run without any human intervention and surrender
              all forms of control to an incorruptible set of business
              rules.</p>
            <h3>Decentralized</h3>
            <p>
              A state where there is no central control, power or function, or
              in reference to infrastructure, no central point of failure.</p>
            <h3>Distributed Ledger</h3>
            <p>
              Distributed ledgers are ledgers in which data is stored across a
              network of decentralized nodes. A distributed ledger does not have
              to have its own currency and may be permissioned and private.</p>
            <h3>Distributed Network</h3>
            <p>A type of network where processing power and data are spread over
              the nodes rather than having a centralized data center.</p>
            <h3>Difficulty</h3>
            <p>This refers to how easily a data block of transaction information
              can be mined successfully.</p>
            <h3>Digital Signature</h3>
            <p>A digital code generated by public key encryption that is
              attached to an electronically transmitted document to verify its
              contents and the sender’s identity.</p>
            <h3>Double Spending</h3>
            <p>Double spending occurs when a sum of money is spent more than
              once.</p>
            <h3>ERC-20</h3>
            <p>A type of token standard for Ether which ensures the tokens
              perform in a predictable way. This allows the tokens to be easily
              exchangeable and able to work immediately with decentralized
              applications that also use the ERC-20 standard. Most tokens
              released through ICOs are compliant with the ERC-20 standard.</p>
          </section>
          <section id="e-f">
            <h3>Ether (ETH)</h3>
            <p>A type of cryptocurrency that is used for operating the Ether
              platform and is used to pay for transaction fees and computational
              tasks. In the platform, transaction fees are measured based on the
              gas limit and gas price and ultimately paid for in Ether.</p>
            <h3>Ether</h3>
            <p>Ether is a blockchain-based decentralized platform for apps that
              run smart contracts, and is aimed at solving issues associated
              with censorship, fraud and third-party interference.</p>
            <h3>EVM</h3>
            <p>The Ether Virtual Machine (EVM) is a Turing complete virtual
              machine that allows anyone to execute arbitrary EVM Byte Code.
              Every Ether node runs on the EVM to maintain consensus across the
              blockchain.</p>
            <h3>Fiat money</h3>
            <p>Refers to currencies that have minimal or no intrinsic value
              themselves (i.e. they are not backed by commodities like gold or
              silver) but are defined as legal tender by the government, such as
              paper bills and coins.</p>
            <h3>Flipping</h3>
            <p>A type of investment strategy (popular in real estate investing)
              where you buy something with the goal of reselling for a profit
              later, usually in a short period of time. In the context of ICOs,
              flipping refers to the strategy of investing in tokens before they
              are listed on the exchanges and reselling them for a profit when
              they are trading in the secondary market.</p>
            <h3>Fork</h3>
            <p>Forks create an alternate version of the blockchain, leaving two
              blockchains to run simultaneously on different parts of the
              network.</p>
          </section>
          <section id="g-h">
            <h3>Genesis Block</h3>
            <p>The first block of data that is processed and validated to form a
              new blockchain, often referred to as block 0 or block 1.</p>
            <h3>Hard Fork</h3>
            <p>A type of fork that renders previously invalid transactions
              valid, and vice versa. This type of fork requires all nodes and
              users to upgrade to the latest version of the protocol
              software.</p>
            <h3>Hash</h3>
            <p>The act of performing a hash function on the output data. This is
              used for confirming coin transactions.</p>
            <h3>Hash Rate</h3>
            <p>Measurement of performance for the mining rig is expressed in
              hashes per second.</p>
            <h3>HODL</h3>
            <p>A type of passive investment strategy where you hold an
              investment for a long period of time, regardless of market
              volatility. The term was made famous by a typo made in a bitcoin
              forum. Also referred to as ‘buy and hold’ or ‘hold on for dear
              life’.</p>
            <h3>Hybrid PoS/PoW</h3>
            <p>A hybrid PoS/PoW allows for both Proof of Stake and Proof of Work
              as consensus distribution algorithms on the network. In this
              method, a balance between miners and voters (holders) may be
              achieved, creating a system of community-based governance by both
              insiders (holders) and outsiders (miners).</p>
          </section>
          <section id="i-l">
            <h3>Initial coin offering (ICO)</h3>
            <p>An unregulated means by which a cryptocurrency venture, typically
              early stage, can raise money from supporters by issuing tokens. It
              is often referred to as a crowdsale as ICO participants may
              potentially earn a return on their investments (as opposed to
              crowdfunding, where supporters donate money to a project or
              cause).</p>
            <h3>Lightning Network</h3>
            <p>A low latency, off chain P2P system for making micropayments of
              cryptocurrencies. It offers features such as instant payments,
              scalability, low cost and cross-chain functionality. Participants
              do not have to make individual transactions public on the
              blockchain and security is enforced by smart contracts.</p>
            <h3>Litecoin (LTC)</h3>
            <p>A type of cryptocurrency that was created by former Google
              employee Charlie Lee in 2011. It offers features such as
              Segregated Witness and the Lightning Network which allows for
              faster processing at lower cost.</p>
          </section>
          <section id="m-n">
            <h3>Market capitalization (market cap)</h3>
            <p>The market value of a company, market or sector at a point in
              time commonly used to rank relative size. In equities, it refers
              to the total market value of a company’s outstanding shares. In
              cryptocurrency investing, it refers to either price multiplied by
              the circulating supply (i.e. free float market cap) or price
              multiplied by the total supply (i.e. fully diluted market
              cap).</p>
            <h3>Mining</h3>
            <p>A process where transactions are verified and added to a
              blockchain. It is also the process where new bitcoins or certain
              altcoins are created. In theory, anyone with the necessary
              hardware and access to the internet can be a miner and earn
              income, but the cost of industrial hardware and electricity has
              limited mining for bitcoins and certain altcoins today to
              large-scale operations.</p>
            <h3>Multi-Signature</h3>
            <p>Multi-signature addresses provide an added layer of security by
              requiring more than one key to authorize a transaction.</p>
            <h3>NodeA</h3>
            <p> copy of the ledger operated by a participant of the blockchain
              network.</p>
          </section>
          <section id="o-q">
            <h3>Oracles</h3>
            <p>Oracles work as a bridge between the real world and the
              blockchain by providing data to the smart contracts.</p>
            <h3>Peer to Peer</h3>
            <p>Peer to Peer (P2P) refers to the decentralized interactions
              between two parties or more in a highly-interconnected network.
              Participants of a P2P network deal directly with each other
              through a single mediation point.</p>
            <h3>Public Address</h3>
            <p>A public address is the cryptographic hash of a public key. They
              act as email addresses that can be published anywhere, unlike
              private keys.</p>
            <h3>Private Key</h3>
            <p>A private key is a string of data that allows you to access the
              tokens in a specific wallet. They act as passwords that are kept
              hidden from anyone but the owner of the address.</p>
            <h3>Proof of Stake (PoS)</h3>
            <p>An algorithm that rewards participants that solves difficult
              cryptographic puzzles to achieve distributed consensus. Unlike
              proof of work or PoW, a person can validate transactions and
              create new blocks based on their individual wealth (i.e. stake)
              such as the total number of coins owned. One of the key advantages
              that PoS has over PoW is lower energy consumption.</p>
            <h3>Proof of Work (PoW)</h3>
            <p>An algorithm that rewards the first person that solves a
              computational problem (i.e. mining) to achieve distributed
              consensus. Miners compete to solve difficult cryptographic puzzles
              in order to add the next block on the blockchain. It prevents spam
              and cyber-attacks such as DDoS as it requires work (i.e.
              processing time) from the service requester.</p>
          </section>
          <section id="r-s">
            <h3>Scrypt</h3>
            <p>Scrypt is a type of cryptographic algorithm and is used by
              Litecoin. Compared to SHA256, this is quicker as it does not use
              up as much processing time.</p>
            <h3>Segregated Witness (SegWit)</h3>
            <p>The process where the block size limit on a blockchain is
              increased by removing digital signature data and moving it to the
              end of a transaction to free up capacity. Transactions are
              essentially split (or ‘segregated’), into two segments: the
              original data segment and the signature (or ‘witness’)
              segment.</p>
            <h3>SHA-256</h3>
            <p>SHA-256 is a cryptographic algorithm used by cryptocurrencies
              such as Bitcoin. However, it uses a lot of computing power and
              processing time, forcing miners to form mining pools to capture
              gains.</p>
            <h3>Smart Contracts</h3>
            <p>An automated mechanism involving two or more parties where
              digital assets are put in and redistributed at a later date based
              on some preset formula and triggering event. The contract can run
              as programmed without any downtime, censorship, fraud or
              third-party interference.<br><br>
              Smart contracts encode in a programmable language onto the
              blockchain and are enforced by the participants of the network.
            </p>
            <h3>Soft Fork</h3>
            <p>A soft fork differs from a hard fork in that only previously
              valid transactions are made invalid. Since old nodes recognize the
              new blocks as valid, a soft fork is essentially
              backward-compatible. This type of fork requires most miners
              upgrading in order to enforce, while a hard fork requires all
              nodes to agree on the new version.</p>
            <h3>Solidity</h3>
            <p> Solidity is Ether’s programming language for developing smart
              contracts.</p>
          </section>
          <section id="t-z">
            <h3>Testnet</h3>
            <p>A test blockchain used by developers to prevent expending assets
              on the main chain.</p>
            <h3>Token</h3>
            <p>Crypto tokens enable the creation of open, decentralized
              networks, and provides a way to incentivize participants in the
              network (with both network growth and token appreciation). This
              innovation, made popular with the introduction of Ether, has given
              rise to a wave of token networks (e.g. prediction markets, content
              creation networks, etc.) and token pre-sales, or ICOs.</p>
            <h3>Total supply</h3>
            <p>The total number of coins or tokens that are in existence,
              including those circulating in the public market and those that
              are locked or reserved.</p>
            <h3>Transaction Block</h3>
            <p>A collection of transactions gathered into a block that can then
              be hashed and added to the blockchain.</p>
            <h3>Transaction Fee</h3>
            <p>All cryptocurrency transactions involve a small transaction fee.
              These transaction fees add up to account for the block reward that
              a miner receives when he successfully processes a block.</p>
            <h3>Turing Complete</h3>
            <p>Turing complete refers to the ability of a machine to perform
              calculations that any other programmable computer is capable of.
              An example of this is the Ether Virtual Machine (EVM).</p>
            <h3>Wallet</h3>
            <p>A file that houses private keys. It usually contains a software
              client which allows access to view and create transactions on a
              specific blockchain that the wallet is designed for.<br><br>
              There are 4 different types of wallets: Software Wallets, Online
              Wallets, Paper Wallets, Hardware Wallets.</p>
            <h3>Whitepaper</h3>
            <p>An informational document that generally informs readers on the
              philosophy, objectives and technology of a project or initiative.
              Whitepapers are often provided before the launch of a new coin or
              token.</p>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PE-Info-Glossary',
};
</script>
<style scoped>
</style>
